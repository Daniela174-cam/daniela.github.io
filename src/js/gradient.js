document.addEventListener("DOMContentLoaded", () => {
    const elements = {
        interactive: document.querySelector(".interactive"),
        toggle: document.getElementById("toggleButton"),
        gradients: document.querySelector(".gradients-container"),
    },
        state = {
            x: 0,
            y: 0,
            targetX: 0,
            targetY: 0,
            tracking: !0,
            running: !0,
            lastTime: 0,
            lastMove: 0,
            animationId: null,
        };
    (elements.interactive.style.transition = "opacity 0.3s ease-in-out"),
        (elements.interactive.style.willChange = "transform");
    const showMessage = (message) => {
        const popup = document.createElement("div");
        (popup.textContent = message),
            (popup.style.cssText =
                "position:fixed;bottom:20px;right:20px;background:rgba(0,0,0,0.7);color:#fff;padding:10px 20px;border-radius:5px;z-index:1000;opacity:0;transition:opacity 0.3s ease;backdrop-filter:blur(5px);"),
            document.body.appendChild(popup),
            requestAnimationFrame(() => {
                (popup.style.opacity = "1"),
                    setTimeout(() => {
                        (popup.style.opacity = "0"),
                            setTimeout(() => document.body.removeChild(popup), 300);
                    }, 2e3);
            });
    },
        animate = (time) => {
            if (!state.running) return;
            if (
                ((state.animationId = requestAnimationFrame(animate)),
                    time - state.lastTime < 33.33)
            )
                return;
            state.lastTime = time;
            const ease = 0.08;
            (state.x += 0.08 * (state.targetX - state.x)),
                (state.y += 0.08 * (state.targetY - state.y)),
                (elements.interactive.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`);
        },
        handlePointerMove = (e) => {
            if (!state.tracking) return;
            const now = Date.now();
            if (now - state.lastMove < 20) return;
            state.lastMove = now;
            const clientX =
                e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0),
                clientY =
                    e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
            (state.targetX = clientX), (state.targetY = clientY);
        };
    window.addEventListener("mousemove", handlePointerMove, { passive: !0 }),
        window.addEventListener("touchmove", handlePointerMove, { passive: !0 }),
        elements.toggle.addEventListener("change", () => {
            (state.tracking = elements.toggle.checked),
                (elements.interactive.style.opacity = state.tracking ? "0.7" : "0"),
                showMessage(
                    state.tracking
                        ? "Gradient tracking enabled"
                        : "Gradient tracking disabled"
                ),
                state.tracking
                    ? state.animationId ||
                    ((state.lastTime = performance.now()),
                        (state.animationId = requestAnimationFrame(animate)))
                    : state.animationId &&
                    (cancelAnimationFrame(state.animationId),
                        (state.animationId = null));
        }),
        (state.tracking = elements.toggle.checked),
        (elements.interactive.style.opacity = state.tracking ? "0.7" : "0"),
        (state.targetX = window.innerWidth / 2),
        (state.targetY = window.innerHeight / 2),
        (state.lastTime = performance.now()),
        (state.animationId = requestAnimationFrame(animate)),
        window.addEventListener(
            "resize",
            () => {
                state.tracking &&
                    ((state.targetX = window.innerWidth / 2),
                        (state.targetY = window.innerHeight / 2));
            },
            { passive: !0 }
        );
});
const isMobile = /Android|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
);
function checkHardwareAcceleration() {
    const canvas = document.createElement("canvas"),
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return showHardwareAccelerationMessage(), !1;
    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        if (
            renderer.toLowerCase().indexOf("swiftshader") >= 0 ||
            renderer.toLowerCase().indexOf("software") >= 0 ||
            renderer.toLowerCase().indexOf("llvmpipe") >= 0
        )
            return showHardwareAccelerationMessage(), !1;
    }
    return !0;
}
function showHardwareAccelerationMessage() {
    const gradientElements = document.querySelectorAll(
        ".g1,.g2,.g3,.g4,.g5,.g6,.interactive"
    );
    gradientElements.forEach((element) => {
        element.style.display = "none";
    });
    const popup = document.createElement("div");
    (popup.textContent =
        "Hardware acceleration is disabled in your browser. For better performance, please enable it in your browser settings."),
        (popup.style.cssText =
            "position:fixed;bottom:20px;left:20px;background:rgba(255,100,100,0.9);color:#fff;padding:10px 20px;border-radius:5px;z-index:1000;opacity:1;transition:opacity 0.3s ease;backdrop-filter:blur(5px);max-width:300px;");
    const closeButton = document.createElement("button");
    (closeButton.textContent = "×"),
        (closeButton.style.cssText =
            "position:absolute;top:5px;right:5px;background:transparent;border:none;color:white;font-size:16px;cursor:pointer;"),
        closeButton.addEventListener("click", () => {
            (popup.style.opacity = "0"),
                setTimeout(() => document.body.removeChild(popup), 300);
        }),
        popup.appendChild(closeButton),
        document.body.appendChild(popup);
}
function setupFpsMonitor() {
    let times = [],
        fpsHistory = [],
        fpsStabilityCheckActive = !0,
        animationDisabled = !1,
        lowFpsStartTime = null,
        lowFpsThreshold = 30,
        lowFpsDuration = 3e3;
    function checkFrameRate() {
        fpsStabilityCheckActive &&
            !animationDisabled &&
            window.requestAnimationFrame(() => {
                const now = performance.now();
                for (; times.length > 0 && times[0] <= now - 1e3;) times.shift();
                times.push(now);
                const currentFps = times.length;
                if ((fpsHistory.push(currentFps), fpsHistory.length > 20)) {
                    fpsHistory.shift();
                    const avgFps =
                        fpsHistory.reduce((sum, fps) => sum + fps, 0) / fpsHistory.length;
                    if (avgFps < 30) {
                        if (null === lowFpsStartTime) lowFpsStartTime = now;
                        else if (now - lowFpsStartTime > 3e3)
                            return (
                                disableAnimationsForPerformance(),
                                (animationDisabled = !0),
                                void (fpsStabilityCheckActive = !1)
                            );
                    } else lowFpsStartTime = null;
                }
                fpsStabilityCheckActive && checkFrameRate();
            });
    }
    function disableAnimationsForPerformance() {
        const gradientElements = document.querySelectorAll(
            ".g1,.g2,.g3,.g4,.g5,.g6,.interactive"
        );
        gradientElements.forEach((element) => {
            (element.style.transition = "opacity 0.5s ease-out"),
                (element.style.opacity = "0");
        }),
            setTimeout(() => {
                gradientElements.forEach((element) => {
                    element.style.display = "none";
                });
                const toggle = document.getElementById("toggleButton");
                toggle && ((toggle.checked = !1), (toggle.disabled = !0)),
                    state &&
                    state.animationId &&
                    (cancelAnimationFrame(state.animationId),
                        (state.animationId = null),
                        (state.tracking = !1));
            }, 500);
        const popup = document.createElement("div");
        (popup.textContent =
            "Low performance GPU detected. Animations have been disabled for a better experience."),
            (popup.style.cssText =
                "position:fixed;bottom:20px;left:20px;background:rgba(255,100,100,0.9);color:#fff;padding:10px 20px;border-radius:5px;z-index:1000;opacity:1;transition:opacity 0.3s ease;backdrop-filter:blur(5px);max-width:300px;");
        const closeButton = document.createElement("button");
        (closeButton.textContent = "×"),
            (closeButton.style.cssText =
                "position:absolute;top:5px;right:5px;background:transparent;border:none;color:white;font-size:16px;cursor:pointer;"),
            closeButton.addEventListener("click", () => {
                (popup.style.opacity = "0"),
                    setTimeout(() => document.body.removeChild(popup), 300);
            }),
            popup.appendChild(closeButton),
            document.body.appendChild(popup);
    }
    setTimeout(() => {
        checkFrameRate();
    }, 2e3);
}
document.addEventListener("DOMContentLoaded", () => {
    if (isMobile || isFirefox) {
        const toggle = document.getElementById("toggleButton");
        toggle && ((toggle.checked = !1), (toggle.disabled = !0));
        const interactive = document.querySelector(".interactive");
        interactive &&
            ((interactive.style.opacity = "0"), (interactive.style.display = "none"));
        const gradients = document.querySelector(".gradients-container");
        gradients &&
            ((gradients.style.animation = "none"),
                (gradients.style.transform = "none"));
        const showDisabledMessage = () => {
            const message = `Animations disabled: ${isMobile ? "Mobile device" : "Firefox"
                } detected`,
                popup = document.createElement("div");
            (popup.textContent = message),
                (popup.style.cssText =
                    "position:fixed;bottom:20px;right:20px;background:rgba(0,0,0,0.7);color:#fff;padding:10px 20px;border-radius:5px;z-index:1000;opacity:1;transition:opacity 0.3s ease;backdrop-filter:blur(5px);"),
                document.body.appendChild(popup),
                setTimeout(() => {
                    (popup.style.opacity = "0"),
                        setTimeout(() => document.body.removeChild(popup), 100);
                }, 1e3);
        };
        showDisabledMessage();
    }
}),
    document.addEventListener("DOMContentLoaded", () => {
        checkHardwareAcceleration(), setupFpsMonitor();
    });
