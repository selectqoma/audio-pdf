const form = document.querySelector("#upload-form");
const input = document.querySelector("#audio-input");
const panel = document.querySelector(".status-panel");
const stageLabel = document.querySelector("#stage-label");
const percentLabel = document.querySelector("#percent-label");
const progressBar = document.querySelector("#progress-bar");
const statusMessage = document.querySelector("#status-message");
const downloadLink = document.querySelector("#download-link");
const submitButton = document.querySelector("#submit-button");

const stageNames = {
  queued: "Queued",
  parsing: "Parsing",
  cleaning: "Cleaning up",
  editing: "Drafting",
  evaluating: "Evaluating",
  thinking: "Thinking",
  almost: "Almost ready",
  done: "Ready",
  failed: "Failed",
};

form.addEventListener("dragenter", () => form.classList.add("is-dragging"));
form.addEventListener("dragleave", () => form.classList.remove("is-dragging"));
form.addEventListener("drop", () => form.classList.remove("is-dragging"));

input.addEventListener("change", () => {
  const file = input.files?.[0];
  if (file) {
    submitButton.hidden = false;
    statusMessage.textContent = `${file.name} is ready to parse.`;
  } else {
    submitButton.hidden = true;
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const file = input.files?.[0];
  if (!file) {
    submitButton.hidden = true;
    setStatus({ status: "idle", stage: "queued", percent: 0, message: "Choose an audio file first." });
    return;
  }

  submitButton.disabled = true;
  downloadLink.hidden = true;
  setStatus({ status: "running", stage: "queued", percent: 2, message: "Uploading audio..." });

  const body = new FormData();
  body.append("audio", file);

  try {
    const response = await fetch("/api/jobs", { method: "POST", body });
    if (!response.ok) {
      throw new Error(await response.text());
    }
    const { job_id: jobId } = await response.json();
    watchJob(jobId);
  } catch (error) {
    submitButton.disabled = false;
    setStatus({ status: "failed", stage: "failed", percent: 0, message: error.message });
  }
});

function watchJob(jobId) {
  const source = new EventSource(`/api/jobs/${jobId}/events`);
  source.onmessage = (event) => {
    const payload = JSON.parse(event.data);
    setStatus(payload);
    if (payload.status === "done" || payload.status === "failed") {
      source.close();
      submitButton.disabled = false;
      submitButton.hidden = false;
    }
  };
  source.onerror = () => {
    source.close();
    submitButton.disabled = false;
    submitButton.hidden = false;
    setStatus({ status: "failed", stage: "failed", percent: 0, message: "Connection to the job stream was interrupted." });
  };
}

function setStatus(payload) {
  const percent = Math.max(0, Math.min(100, payload.percent || 0));
  panel.dataset.state = payload.status || "running";
  stageLabel.textContent = stageNames[payload.stage] || payload.stage || "Working";
  percentLabel.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
  statusMessage.textContent = payload.message || "";

  if (payload.download_url) {
    downloadLink.href = payload.download_url;
    downloadLink.hidden = false;
  } else {
    downloadLink.hidden = true;
  }
}
