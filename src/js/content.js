const _0x4398e1 = _0x3d7e;
function _0x3d7e(_0x2a6c2c, _0x47b46c) {
    const _0x15c859 = _0x15c8();
    return (
        (_0x3d7e = function (_0x3d7e66, _0x27764f) {
            _0x3d7e66 = _0x3d7e66 - 0x1a5;
            let _0x5f286b = _0x15c859[_0x3d7e66];
            return _0x5f286b;
        }),
        _0x3d7e(_0x2a6c2c, _0x47b46c)
    );
}
(function (_0xb8f8b, _0x27cee8) {
    const _0x1c3933 = _0x3d7e,
        _0x57cb96 = _0xb8f8b();
    while (!![]) {
        try {
            const _0x18847f =
                -parseInt(_0x1c3933(0x1f6)) / 0x1 +
                -parseInt(_0x1c3933(0x20c)) / 0x2 +
                (-parseInt(_0x1c3933(0x21c)) / 0x3) *
                (parseInt(_0x1c3933(0x1ae)) / 0x4) +
                -parseInt(_0x1c3933(0x205)) / 0x5 +
                parseInt(_0x1c3933(0x1d5)) / 0x6 +
                parseInt(_0x1c3933(0x213)) / 0x7 +
                (-parseInt(_0x1c3933(0x1af)) / 0x8) *
                (-parseInt(_0x1c3933(0x1cd)) / 0x9);
            if (_0x18847f === _0x27cee8) break;
            else _0x57cb96["push"](_0x57cb96["shift"]());
        } catch (_0x28f138) {
            _0x57cb96["push"](_0x57cb96["shift"]());
        }
    }
})(_0x15c8, 0x419ab);
const projectCards = document[_0x4398e1(0x1d6)](_0x4398e1(0x206)),
    projectsPerPage = 0x3;
let currentPage = 0x1;
function showProjects(_0x332a1c) {
    const _0x2a2122 = _0x4398e1,
        _0x38cbe1 = 0x3 * (_0x332a1c - 0x1),
        _0x4dcce4 = _0x38cbe1 + 0x3;
    projectCards[_0x2a2122(0x203)]((_0x3e5561, _0x2e59ea) => {
        const _0x125378 = _0x2a2122;
        (_0x3e5561[_0x125378(0x1ef)]["display"] = _0x125378(0x1cb)),
            (_0x3e5561["style"][_0x125378(0x226)] = "0"),
            (_0x3e5561["style"][_0x125378(0x1ee)] = _0x125378(0x1be)),
            _0x2e59ea >= _0x38cbe1 && _0x2e59ea < _0x4dcce4
                ? ((_0x3e5561[_0x125378(0x1ef)][_0x125378(0x1d8)] = _0x125378(0x1cb)),
                    setTimeout(() => {
                        const _0x30ffe7 = _0x125378;
                        (_0x3e5561[_0x30ffe7(0x1ef)]["opacity"] = "1"),
                            (_0x3e5561[_0x30ffe7(0x1ef)][_0x30ffe7(0x1ee)] = "translateY(0)");
                    }, (_0x2e59ea % 0x3) * 0x64))
                : (_0x3e5561[_0x125378(0x1ef)][_0x125378(0x1d8)] = _0x125378(0x1ec));
    }),
        updatePaginationButtons();
}
function updatePaginationButtons() {
    const _0x31bccc = _0x4398e1,
        _0x40fb21 = Math[_0x31bccc(0x1e4)](projectCards["length"] / 0x3),
        _0x467662 = document[_0x31bccc(0x1ed)](".pagination");
    if (_0x467662) {
        _0x467662["innerHTML"] = "";
        const _0x57b394 = document[_0x31bccc(0x219)]("button");
        _0x57b394["classList"]["add"](_0x31bccc(0x224), "prev-btn"),
            (_0x57b394[_0x31bccc(0x21e)] = _0x31bccc(0x1a7)),
            (_0x57b394["disabled"] = 0x1 === currentPage),
            _0x57b394["setAttribute"](_0x31bccc(0x1ba), "Previous\x20page"),
            _0x57b394[_0x31bccc(0x1d9)]("click", () => {
                currentPage > 0x1 && (currentPage--, showProjects(currentPage));
            }),
            _0x467662["appendChild"](_0x57b394);
        for (let _0x1c07e6 = 0x1; _0x1c07e6 <= _0x40fb21; _0x1c07e6++) {
            const _0xa1840b = document[_0x31bccc(0x219)](_0x31bccc(0x214));
            _0xa1840b[_0x31bccc(0x1a9)]["add"]("pagination-btn", _0x31bccc(0x1f7)),
                _0x1c07e6 === currentPage &&
                _0xa1840b["classList"][_0x31bccc(0x1c2)](_0x31bccc(0x1c7)),
                (_0xa1840b[_0x31bccc(0x1c0)] = _0x1c07e6),
                _0xa1840b[_0x31bccc(0x1d9)](_0x31bccc(0x1c1), () => {
                    (currentPage = _0x1c07e6), showProjects(currentPage);
                }),
                _0x467662[_0x31bccc(0x1c9)](_0xa1840b);
        }
        const _0x345d27 = document[_0x31bccc(0x219)](_0x31bccc(0x214));
        _0x345d27["classList"][_0x31bccc(0x1c2)](
            _0x31bccc(0x224),
            _0x31bccc(0x20a)
        ),
            (_0x345d27[_0x31bccc(0x21e)] = _0x31bccc(0x1e1)),
            (_0x345d27[_0x31bccc(0x1ff)] = currentPage === _0x40fb21),
            _0x345d27[_0x31bccc(0x1e0)](_0x31bccc(0x1ba), _0x31bccc(0x1b5)),
            _0x345d27[_0x31bccc(0x1d9)]("click", () => {
                currentPage < _0x40fb21 && (currentPage++, showProjects(currentPage));
            }),
            _0x467662[_0x31bccc(0x1c9)](_0x345d27);
    }
}
const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px\x200px\x20-100px\x200px",
},
    projectObserver = new IntersectionObserver((_0x52818a, _0x5e6ec6) => {
        const _0x25e6ef = _0x4398e1;
        _0x52818a[_0x25e6ef(0x203)]((_0x2ee4b8) => {
            const _0x448dde = _0x25e6ef;
            _0x2ee4b8[_0x448dde(0x220)] &&
                (_0x2ee4b8["target"][_0x448dde(0x1a9)][_0x448dde(0x223)](
                    "projects-container"
                ) &&
                    !document[_0x448dde(0x1ed)](_0x448dde(0x1ea)) &&
                    showProjects(currentPage),
                    _0x5e6ec6[_0x448dde(0x20d)](_0x2ee4b8["target"]));
        });
    }, observerOptions),
    projectsContainer = document["querySelector"](".projects-container");
projectsContainer && projectObserver["observe"](projectsContainer),
    projectCards[_0x4398e1(0x203)]((_0x477a34) => {
        const _0x5f0251 = _0x4398e1;
        _0x477a34[_0x5f0251(0x1d9)](_0x5f0251(0x1bc), () => {
            const _0x59ec48 = _0x5f0251,
                _0x3158ec = _0x477a34["querySelector"](_0x59ec48(0x1dd));
            _0x3158ec && (_0x3158ec["style"][_0x59ec48(0x1ee)] = _0x59ec48(0x1e9));
        }),
            _0x477a34[_0x5f0251(0x1d9)]("mouseleave", () => {
                const _0x32a12c = _0x5f0251,
                    _0x3e1dda = _0x477a34["querySelector"](_0x32a12c(0x1dd));
                _0x3e1dda && (_0x3e1dda[_0x32a12c(0x1ef)]["transform"] = "scale(1)");
            });
    });
const projectBtns = document[_0x4398e1(0x1d6)](_0x4398e1(0x1db));
projectBtns[_0x4398e1(0x203)]((_0xf9e32a) => {
    const _0x7a7c15 = _0x4398e1;
    _0xf9e32a[_0x7a7c15(0x1d9)]("click", (_0x51321a) => {
        const _0xa91d10 = _0x7a7c15;
        if ("#" === _0xf9e32a[_0xa91d10(0x212)](_0xa91d10(0x20e))) {
            _0x51321a[_0xa91d10(0x1cc)]();
            const _0x1f5eae = _0xf9e32a[_0xa91d10(0x21f)](_0xa91d10(0x206)),
                _0x572189 = _0x1f5eae[_0xa91d10(0x1ed)](_0xa91d10(0x211));
            _0x572189 && _0x572189["classList"][_0xa91d10(0x1c2)](_0xa91d10(0x1b9));
        }
    });
});
const closeButtons = document[_0x4398e1(0x1d6)](_0x4398e1(0x1e6));
function _0x15c8() {
    const _0x59aed5 = [
        "ceil",
        "pageX",
        ".close-description",
        "touchend",
        "boxShadow",
        "scale(1.05)",
        ".pagination\x20.active",
        "Persistencia\x20de\x20datos",
        "none",
        "querySelector",
        "transform",
        "style",
        "touchmove",
        "observe",
        "keydown",
        "cursor",
        "mouseleave",
        "metaKey",
        "200262xMTyrK",
        "page-num",
        "touches",
        ".certificate-card",
        "HTML/CSS",
        "",
        "offsetWidth",
        "skill-name",
        "DOMContentLoaded",
        "disabled",
        "",
        "name",
        "grabbing",
        "forEach",
        "skill-header",
        "672335DonoZC",
        ".project-card",
        "translateY(0)",
        "",
        "px)",
        "next-btn",
        "grab",
        "1038034miJrHw",
        "unobserve",
        "href",
        "translateX(0px)",
        "/public/assets/projects/project2-1.webp",
        ".project-description",
        "getAttribute",
        "670131FPltXr",
        "button",
        "length",
        "mouseup",
        "Diseño\x20de\x20bases\x20de\x20datos,\x20consultas,\x20gestión\x20de\x20datos",
        "dragstart",
        "createElement",
        "description",
        "contextmenu",
        "27YhQDDk",
        "mousemove",
        "innerHTML",
        "closest",
        "isIntersecting",
        "touchstart",
        "dot",
        "contains",
        "pagination-btn",
        "Diseño\x20responsivo,\x20diseños\x20modernos,\x20animaciones",
        "opacity",
        "level",
        "/public/assets/projects/project2-0.webp",
        "&larr;",
        ".project-card\x20img[alt=\x22FSA\x22]",
        "classList",
        "all\x200.6s\x20ease",
        "className",
        "Desarrollo\x20de\x20aplicaciones\x20en\x20C#",
        "load",
        "167884hzSQFy",
        "32ZkfJVX",
        "skill-info",
        ".skills-container",
        "remove",
        "Base\x20de\x20datos\x20PostgreSQL",
        "dot\x20filled",
        "Next\x20page",
        "cloneNode",
        ".certificates-scroll-container",
        ".certificates-group",
        "show",
        "aria-label",
        "userSelect",
        "mouseenter",
        "Mysql",
        "NADA",
        "C#",
        "textContent",
        "NADA",
        "add",
        "SQL",
        "Desarrollo\x20web,\x20características\x20interactivas,\x20manipulación\x20del\x20DOM",
        ".websites-section",
        "mousedown",
        "active",
        "translateX(",
        "appendChild",
        "key",
        "block",
        "preventDefault",
        "2658456YoEuxq",
        "body",
        "div",
        "resize",
        "abs",
        ".website-btn",
        "Gestión\x20de\x20bases\x20de\x20datos\x20MySQL",
        "MozUserSelect",
        "1337586GVHbcj",
        "querySelectorAll",
        "innerWidth",
        "display",
        "addEventListener",
        "data-url",
        ".project-btn",
        "offsetLeft",
        "img",
        "undefined",
        "Postgresql",
        "setAttribute",
        "&rarr;",
        "Python",
        "target",
    ];
    _0x15c8 = function () {
        return _0x59aed5;
    };
    return _0x15c8();
}
function startFSASlideshow() {
    const _0x54f16a = _0x4398e1,
        _0x91860b = document["querySelector"](_0x54f16a(0x1a8));
    if (!_0x91860b) return;
    const _0x418261 = [
        _0x54f16a(0x1a6),
        _0x54f16a(0x210),
        "/public/assets/projects/project2-2.webp",
    ];
    let _0x1971a0 = 0x0;
    setInterval(() => {
        const _0x218410 = _0x54f16a;
        (_0x1971a0 = (_0x1971a0 + 0x1) % _0x418261[_0x218410(0x215)]),
            (_0x91860b[_0x218410(0x1ef)][_0x218410(0x226)] = "0"),
            setTimeout(() => {
                const _0x2bfed5 = _0x218410;
                (_0x91860b["src"] = _0x418261[_0x1971a0]),
                    (_0x91860b[_0x2bfed5(0x1ef)][_0x2bfed5(0x226)] = "1");
            }, 0x64);
    }, 0x2710);
}
function animateWebsiteButtons() {
    const _0x3a76e9 = _0x4398e1,
        _0x1e7322 = document["querySelectorAll"](_0x3a76e9(0x1d2)),
        _0x404fe8 = document[_0x3a76e9(0x1ed)](_0x3a76e9(0x1c5));
    if (!_0x1e7322[_0x3a76e9(0x215)] || !_0x404fe8) return;
    const _0x2876ca = new IntersectionObserver(
        (_0x5353f6) => {
            _0x5353f6["forEach"]((_0x480866) => {
                const _0x2bf041 = _0x3d7e;
                _0x480866[_0x2bf041(0x220)] &&
                    (_0x1e7322["forEach"]((_0x7541a8, _0x3106fd) => {
                        setTimeout(() => {
                            const _0x3717f7 = _0x3d7e;
                            (_0x7541a8[_0x3717f7(0x1ef)][_0x3717f7(0x226)] = "1"),
                                (_0x7541a8[_0x3717f7(0x1ef)][_0x3717f7(0x1ee)] =
                                    _0x3717f7(0x207));
                        }, 0x96 * _0x3106fd);
                    }),
                        _0x2876ca["unobserve"](_0x480866[_0x2bf041(0x1e3)]));
            });
        },
        { threshold: 0.2 }
    );
    _0x2876ca[_0x3a76e9(0x1f1)](_0x404fe8),
        _0x1e7322[_0x3a76e9(0x203)]((_0x4e8666) => {
            const _0x4e056e = _0x3a76e9;
            (_0x4e8666["style"][_0x4e056e(0x226)] = "0"),
                (_0x4e8666[_0x4e056e(0x1ef)]["transform"] = _0x4e056e(0x1be)),
                (_0x4e8666[_0x4e056e(0x1ef)]["transition"] = _0x4e056e(0x1aa));
        });
}
closeButtons[_0x4398e1(0x203)]((_0x148f33) => {
    const _0x175cfa = _0x4398e1;
    _0x148f33[_0x175cfa(0x1d9)](_0x175cfa(0x1c1), () => {
        const _0x35261e = _0x175cfa,
            _0x554c2c = _0x148f33[_0x35261e(0x21f)](_0x35261e(0x211));
        _0x554c2c["classList"][_0x35261e(0x1b2)](_0x35261e(0x1b9));
    });
}),
document.addEventListener('DOMContentLoaded', () => {
    startFSASlideshow();
    animateWebsiteButtons();
});

function startFSASlideshow() {
    const fsaImage = document.querySelector('.project-card img[alt="FSA"]');
    if (!fsaImage) return;

    const images = [
        "/public/assets/projects/project2-0.webp",
        "/public/assets/projects/project2-1.webp",
        "/public/assets/projects/project2-2.webp"
    ];

    let currentImage = 0;
    setInterval(() => {
        currentImage = (currentImage + 1) % images.length;
        fsaImage.style.opacity = "0";
        setTimeout(() => {
            fsaImage.src = images[currentImage];
            fsaImage.style.opacity = "1";
        }, 100);
    }, 10000);
}

function animateWebsiteButtons() {
    const websiteButtons = document.querySelectorAll('.website-btn');
    const websitesSection = document.querySelector('.websites-section');

    if (!websiteButtons.length || !websitesSection) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                websiteButtons.forEach((button, index) => {
                    setTimeout(() => {
                        button.style.opacity = "1";
                        button.style.transform = "translateY(0)";
                    }, 150 * index);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(websitesSection);

    websiteButtons.forEach(button => {
        button.style.opacity = "0";
        button.style.transform = "translateY(30px)";
        button.style.transition = "all 0.6s ease";
    });
}

// Aquí continuaría el resto de tu archivo (proyectos, paginación, scroll automático, etc.)
// Que también puedo limpiar si deseas.

    document["addEventListener"](_0x4398e1(0x1fe), function () {
        const _0x1824a8 = _0x4398e1,
            _0x2ce921 = [
                { name: _0x1824a8(0x1df), level: 0x5, description: _0x1824a8(0x1b3) },
                { name: _0x1824a8(0x1bf), level: 0x4, description: _0x1824a8(0x1ac) },
                { name: _0x1824a8(0x1e2), level: 0x4, description: _0x1824a8(0x1eb) },
                { name: "JavaScript", level: 0x3, description: _0x1824a8(0x1c4) },
                { name: _0x1824a8(0x1fa), level: 0x4, description: _0x1824a8(0x225) },
                { name: _0x1824a8(0x1bd), level: 0x3, description: _0x1824a8(0x1d3) },
                {
                    name: "Git",
                    level: 0x4,
                    description:
                        "Version\x20control,\x20collaboration,\x20project\x20management",
                },
                { name: _0x1824a8(0x1c3), level: 0x2, description: _0x1824a8(0x217) },
            ],
            _0x296eb1 = document[_0x1824a8(0x1ed)](_0x1824a8(0x1b1));
        _0x2ce921[_0x1824a8(0x203)]((_0x14d6ae) => {
            const _0x3dde84 = _0x1824a8,
                _0xd1486f = document[_0x3dde84(0x219)](_0x3dde84(0x1cf));
            _0xd1486f[_0x3dde84(0x1ab)] = "skill-card";
            const _0x2399b3 = document["createElement"]("div");
            _0x2399b3[_0x3dde84(0x1ab)] = _0x3dde84(0x204);
            const _0x105555 = document[_0x3dde84(0x219)](_0x3dde84(0x1cf));
            (_0x105555["className"] = _0x3dde84(0x1fd)),
                (_0x105555["textContent"] = _0x14d6ae[_0x3dde84(0x201)]);
            const _0x1b20fb = document[_0x3dde84(0x219)](_0x3dde84(0x1cf));
            _0x1b20fb[_0x3dde84(0x1ab)] = "skill-level";
            for (let _0x34c861 = 0x1; _0x34c861 <= 0x5; _0x34c861++) {
                const _0x412b09 = document["createElement"](_0x3dde84(0x1cf));
                (_0x412b09[_0x3dde84(0x1ab)] =
                    _0x34c861 <= _0x14d6ae[_0x3dde84(0x1a5)]
                        ? _0x3dde84(0x1b4)
                        : _0x3dde84(0x222)),
                    _0x1b20fb[_0x3dde84(0x1c9)](_0x412b09);
            }
            const _0x211998 = document[_0x3dde84(0x219)](_0x3dde84(0x1cf));
            (_0x211998[_0x3dde84(0x1ab)] = _0x3dde84(0x1b0)),
                (_0x211998[_0x3dde84(0x1c0)] = _0x14d6ae[_0x3dde84(0x21a)]),
                _0x2399b3[_0x3dde84(0x1c9)](_0x105555),
                _0x2399b3["appendChild"](_0x1b20fb),
                _0xd1486f[_0x3dde84(0x1c9)](_0x2399b3),
                _0xd1486f["appendChild"](_0x211998),
                _0x296eb1[_0x3dde84(0x1c9)](_0xd1486f);
        });
    }),
    document[_0x4398e1(0x1d9)](_0x4398e1(0x1fe), function () {
        const _0x2682d8 = _0x4398e1;
        window[_0x2682d8(0x1d9)](_0x2682d8(0x1ad), _0x4d49b2);
        function _0x4d49b2() {
            const _0x174e82 = _0x2682d8,
                _0x58bbe4 = document[_0x174e82(0x1ed)](_0x174e82(0x1b8));
            if (!_0x58bbe4) return;
            const _0x59c274 = _0x58bbe4[_0x174e82(0x1b6)](!![]),
                _0xcc9c6f = document[_0x174e82(0x1ed)](".certificates-track");
            if (!_0xcc9c6f) return;
            const _0x31e625 = _0xcc9c6f["querySelector"](
                ".certificates-group:nth-child(2)"
            );
            _0x31e625 && _0x31e625[_0x174e82(0x1b2)]();
            _0xcc9c6f["appendChild"](_0x59c274);
            const _0x5ec008 = _0x58bbe4["offsetWidth"];
            let _0xe384b3 = ![],
                _0xc5ba5,
                _0x94e0de,
                _0x4e010a,
                _0x19fc23 = 0.5,
                _0x17e4b2 = 0x0;
            function _0x5def46() {
                _0x4e010a && cancelAnimationFrame(_0x4e010a);
                function _0xc012ee() {
                    const _0x1a54a3 = _0x3d7e;
                    (_0x17e4b2 -= _0x19fc23),
                        Math[_0x1a54a3(0x1d1)](_0x17e4b2) >= _0x5ec008 &&
                        _0x5ec008 > 0x0 &&
                        (_0x17e4b2 = 0x0),
                        (_0xcc9c6f[_0x1a54a3(0x1ef)][_0x1a54a3(0x1ee)] =
                            "translateX(" + _0x17e4b2 + "px)"),
                        (_0x4e010a = requestAnimationFrame(_0xc012ee));
                }
                _0xc012ee();
            }
            _0x5def46();
            const _0x238be9 = document[_0x174e82(0x1ed)](_0x174e82(0x1b7));
            if (!_0x238be9) return;
            _0x238be9["addEventListener"](_0x174e82(0x1c6), (_0x5edbd0) => {
                const _0x8fe004 = _0x174e82;
                (_0xe384b3 = !![]),
                    (_0x238be9[_0x8fe004(0x1ef)][_0x8fe004(0x1f3)] = _0x8fe004(0x202)),
                    (_0xc5ba5 =
                        _0x5edbd0[_0x8fe004(0x1e5)] - _0xcc9c6f[_0x8fe004(0x1dc)]),
                    (_0x94e0de = _0x17e4b2),
                    cancelAnimationFrame(_0x4e010a);
            }),
                _0x238be9[_0x174e82(0x1d9)](_0x174e82(0x1f4), () => {
                    const _0xe95f25 = _0x174e82;
                    (_0xe384b3 = ![]),
                        (_0x238be9[_0xe95f25(0x1ef)][_0xe95f25(0x1f3)] = _0xe95f25(0x20b)),
                        _0x5def46();
                }),
                _0x238be9[_0x174e82(0x1d9)](_0x174e82(0x216), () => {
                    const _0x33c03f = _0x174e82;
                    (_0xe384b3 = ![]),
                        (_0x238be9[_0x33c03f(0x1ef)][_0x33c03f(0x1f3)] = _0x33c03f(0x20b)),
                        _0x5def46();
                }),
                _0x238be9[_0x174e82(0x1d9)](_0x174e82(0x21d), (_0x4de351) => {
                    const _0x155670 = _0x174e82;
                    if (!_0xe384b3) return;
                    _0x4de351["preventDefault"]();
                    const _0x4a6521 = _0x4de351["pageX"] - _0xcc9c6f[_0x155670(0x1dc)],
                        _0x42b002 = (_0x4a6521 - _0xc5ba5) * 0x2;
                    (_0x17e4b2 = _0x94e0de + _0x42b002),
                        _0x5ec008 > 0x0 &&
                        Math["abs"](_0x17e4b2) >= _0x5ec008 &&
                        ((_0x17e4b2 = _0x17e4b2 % _0x5ec008),
                            (_0x94e0de = _0x17e4b2),
                            (_0xc5ba5 =
                                _0x4de351[_0x155670(0x1e5)] - _0xcc9c6f[_0x155670(0x1dc)])),
                        (_0xcc9c6f["style"]["transform"] =
                            _0x155670(0x1c8) + _0x17e4b2 + _0x155670(0x209));
                });
            const _0x49e2b6 = document["querySelectorAll"](_0x174e82(0x1f9));
            _0x49e2b6["forEach"]((_0xfe8f64) => {
                const _0x5e837f = _0x174e82;
                _0xfe8f64[_0x5e837f(0x1d9)](_0x5e837f(0x1c1), function () {
                    const _0x1be432 = _0x5e837f,
                        _0x127cfc = this[_0x1be432(0x212)](_0x1be432(0x1da));
                    _0x127cfc &&
                        _0x127cfc !== "#" &&
                        _0x127cfc !== _0x1be432(0x1de) &&
                        window["open"](_0x127cfc, _0x1be432(0x200));
                }),
                    _0xfe8f64["addEventListener"]("mouseenter", function () {
                        const _0x9e558f = _0x5e837f;
                        cancelAnimationFrame(_0x4e010a),
                            (this[_0x9e558f(0x1ef)]["boxShadow"] = _0x9e558f(0x208));
                    }),
                    _0xfe8f64[_0x5e837f(0x1d9)](_0x5e837f(0x1f4), function () {
                        const _0xc373c8 = _0x5e837f;
                        _0x5def46(), (this["style"][_0xc373c8(0x1e8)] = "");
                    });
            }),
                _0x238be9["addEventListener"](
                    _0x174e82(0x221),
                    (_0x4d5725) => {
                        const _0xdd2434 = _0x174e82;
                        (_0xe384b3 = !![]),
                            (_0xc5ba5 =
                                _0x4d5725[_0xdd2434(0x1f8)][0x0]["pageX"] -
                                _0xcc9c6f[_0xdd2434(0x1dc)]),
                            (_0x94e0de = _0x17e4b2),
                            cancelAnimationFrame(_0x4e010a);
                    },
                    { passive: ![] }
                ),
                _0x238be9[_0x174e82(0x1d9)](_0x174e82(0x1e7), () => {
                    (_0xe384b3 = ![]), _0x5def46();
                }),
                _0x238be9["addEventListener"](
                    _0x174e82(0x1f0),
                    (_0x1a72e6) => {
                        const _0x5c137c = _0x174e82;
                        if (!_0xe384b3) return;
                        const _0x553ea3 =
                            _0x1a72e6[_0x5c137c(0x1f8)][0x0][_0x5c137c(0x1e5)] -
                            _0xcc9c6f["offsetLeft"],
                            _0x221d52 = (_0x553ea3 - _0xc5ba5) * 0x2;
                        (_0x17e4b2 = _0x94e0de + _0x221d52),
                            _0x5ec008 > 0x0 &&
                            Math[_0x5c137c(0x1d1)](_0x17e4b2) >= _0x5ec008 &&
                            ((_0x17e4b2 = _0x17e4b2 % _0x5ec008),
                                (_0x94e0de = _0x17e4b2),
                                (_0xc5ba5 =
                                    _0x1a72e6[_0x5c137c(0x1f8)][0x0]["pageX"] -
                                    _0xcc9c6f[_0x5c137c(0x1dc)])),
                            (_0xcc9c6f["style"][_0x5c137c(0x1ee)] =
                                "translateX(" + _0x17e4b2 + _0x5c137c(0x209)),
                            _0x1a72e6[_0x5c137c(0x1cc)]();
                    },
                    { passive: ![] }
                );
            function _0x1247e4() {
                const _0x5093e6 = _0x174e82;
                _0x19fc23 = window[_0x5093e6(0x1d7)] > 0x4b0 ? 0x1 : 0.5;
            }
            window[_0x174e82(0x1d9)](_0x174e82(0x1d0), () => {
                const _0x2a949b = _0x174e82;
                _0x1247e4();
                const _0x5229d6 = _0x58bbe4[_0x2a949b(0x1fc)];
                _0x5229d6 > 0x0 &&
                    Math["abs"](_0x5229d6 - _0x5ec008) > 0x64 &&
                    ((_0x17e4b2 = 0x0),
                        (_0xcc9c6f["style"][_0x2a949b(0x1ee)] = _0x2a949b(0x20f)));
            }),
                _0x1247e4();
        }
    });