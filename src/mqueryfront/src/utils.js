export const isStatusFinished = (status) =>
    ["done", "cancelled", "failed", "expired", "removed"].includes(status);

const statusClassMap = {
    done: "success",
    new: "info",
    processing: "info",
    expired: "warning",
    cancelled: "danger",
    failed: "danger",
    removed: "dark",
};

export const getProgressBarClass = (status) => {
    const classSufix = statusClassMap[status];
    return "progress-bar" + (classSufix ? " bg-" + classSufix : "");
};

export const isAuthEnabled = (config) =>
    config && config["auth_enabled"] && config["auth_enabled"] !== "false";

export const withTimeout = (callback, param, timeout_callback, time) => {
    var success = false;
    return (() => {
        setTimeout(() => {
            if (!success) timeout_callback()
        }, time);
        return callback(param).then((res) => { success = true; return res });
    })();
};