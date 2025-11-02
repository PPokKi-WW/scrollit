        import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
        import { getFirestore, collection, addDoc, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

        const firebaseConfig = {
            apiKey: "AIzaSyC1AtCeDkgLoE8PFzBjjdfFKHq0vWB1cNI",
            authDomain: "scrollit-9556f.firebaseapp.com",
            projectId: "scrollit-9556f",
            storageBucket: "scrollit-9556f.firebasestorage.app",
            messagingSenderId: "750918986653",
            appId: "1:750918986653:web:46871d2f5a0c942a441d74"
        };

        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        const defaultImages = [
             { url: "images/asd (55).JPGE", text: "" },
            { url: "images/asd (56).JPGE", text: "" },
            { url: "images/asd (57).JPGE", text: "" },
            { url: "images/asd (58).JPGE", text: "" },
            { url: "images/asd (59).JPGE", text: "" },
            { url: "images/asd (60).JPGE", text: "" },
            { url: "images/asd (61).JPGE", text: "" },
            { url: "images/asd (62).JPGE", text: "" },
            { url: "images/asd (63).JPGE", text: "" },
            { url: "images/asd (64).JPGE", text: "" },
            { url: "images/asd (65).JPGE", text: "" },
            { url: "images/asd (66).JPGE", text: "" },
            { url: "images/asd (67).JPGE", text: "" },
            { url: "images/asd (68).JPGE", text: "" },
            { url: "images/asd (69).JPGE", text: "" },
            { url: "images/asd (70).JPGE", text: "" },
            { url: "images/asd (71).JPGE", text: "" },
            { url: "images/asd (72).JPGE", text: "" },
            { url: "images/asd (73).JPGE", text: "" },
            { url: "images/asd (74).JPGE", text: "" },
            { url: "images/asd (75).JPGE", text: "" },
            { url: "images/asd (76).JPGE", text: "" },
            { url: "images/asd (77).JPGE", text: "" },
            { url: "images/asd (78).JPGE", text: "" },
            { url: "images/asd (79).JPGE", text: "" },
            { url: "images/asd (80).JPGE", text: "" },
            { url: "images/asd (81).JPGE", text: "" },
            { url: "images/asd (82).JPGE", text: "" },
            { url: "images/asd (83).JPGE", text: "" },
            { url: "images/asd (84).JPGE", text: "" },
            { url: "images/asd (85).JPGE", text: "" },
            { url: "images/asd (86).JPGE", text: "" },
            { url: "images/asd (87).JPGE", text: "" },
            { url: "images/asd (88).JPGE", text: "" },
            { url: "images/asd (89).JPGE", text: "" },
            { url: "images/asd (90).JPGE", text: "" },
            { url: "images/asd (91).JPGE", text: "" },
            { url: "images/asd (92).JPGE", text: "" },
            { url: "images/asd (93).JPGE", text: "" },
            { url: "images/asd (94).JPGE", text: "" },
            { url: "images/asd (95).JPGE", text: "" },
            { url: "images/asd (96).JPGE", text: "" },
            { url: "images/asd (97).JPGE", text: "" },
            { url: "images/asd (98).JPGE", text: "" },
            { url: "images/asd (99).JPGE", text: "" },
            { url: "images/asd (100).JPGE", text: "" },
            { url: "images/asd (101).JPGE", text: "" },
            { url: "images/asd (102).JPGE", text: "" },
            { url: "images/asd (103).JPGE", text: "" },
            { url: "images/asd (104).JPGE", text: "" },
            { url: "images/asd (105).JPGE", text: "" },
            { url: "images/asd (106).JPGE", text: "" },
            { url: "images/asd (107).JPGE", text: "" },
            { url: "images/asd (108).JPGE", text: "" },
            { url: "images/asd (109).JPGE", text: "" },
            { url: "images/asd (110).JPGE", text: "" },
            { url: "images/asd (111).JPGE", text: "" },
            { url: "images/asd (112).JPGE", text: "" },
            { url: "images/asd (113).JPGE", text: "" },
            { url: "images/asd (114).JPGE", text: "" },
            { url: "images/asd (115).JPGE", text: "" },
            { url: "images/asd (116).JPGE", text: "" },
            { url: "images/asd (117).JPGE", text: "" },
            { url: "images/asd (118).JPGE", text: "" },
            { url: "images/asd (119).JPGE", text: "" },
            { url: "images/asd (120).JPGE", text: "" },
            { url: "images/asd (121).JPGE", text: "" },
            { url: "images/asd (122).JPGE", text: "" },
            { url: "images/asd (123).JPGE", text: "" },
            { url: "images/asd (124).JPGE", text: "" },
            { url: "images/asd (125).JPGE", text: "" },
            { url: "images/asd (126).JPGE", text: "" },
            { url: "images/asd (127).JPGE", text: "" },
            { url: "images/asd (128).JPGE", text: "" },
            { url: "images/asd (129).JPGE", text: "" },
            { url: "images/asd (130).JPGE", text: "" },
            { url: "images/asd (131).JPGE", text: "" },
            { url: "images/asd (132).JPGE", text: "" },
            { url: "images/asd (133).JPGE", text: "" },
            { url: "images/asd (134).JPGE", text: "" },
            { url: "images/asd (135).JPGE", text: "" },
            { url: "images/asd (136).JPGE", text: "" },
            { url: "images/asd (137).JPGE", text: "" },
            { url: "images/asd (138).JPGE", text: "" },
            { url: "images/asd (139).JPGE", text: "" },
            { url: "images/asd (140).JPGE", text: "" },
            { url: "images/asd (141).JPGE", text: "" },
            { url: "images/asd (142).JPGE", text: "" },
            { url: "images/asd (143).JPGE", text: "" },
            { url: "images/asd (144).JPGE", text: "" },
            { url: "images/asd (145).JPGE", text: "" },
            { url: "images/asd (146).JPGE", text: "" },
            { url: "images/asd (147).JPGE", text: "" },
            { url: "images/asd (148).JPGE", text: "" },
            { url: "images/asd (149).JPGE", text: "" },
            { url: "images/asd (150).JPGE", text: "" },
            { url: "images/asd (151).JPGE", text: "" },
            { url: "images/asd (152).JPGE", text: "" },
            { url: "images/asd (153).JPGE", text: "" },
            { url: "images/asd (154).JPGE", text: "" },
            { url: "images/asd (155).JPGE", text: "" },
            { url: "images/asd (156).JPGE", text: "" },
            { url: "images/asd (157).JPGE", text: "" },
            { url: "images/asd (158).JPGE", text: "" },
            { url: "images/asd (159).JPGE", text: "" },
            { url: "images/asd (160).JPGE", text: "" },
            { url: "images/asd (161).JPGE", text: "" },
            { url: "images/asd (162).JPGE", text: "" },
            { url: "images/asd (163).JPGE", text: "" },
            { url: "images/asd (164).JPGE", text: "" },
            { url: "images/asd (165).JPGE", text: "" },
            { url: "images/asd (166).JPGE", text: "" },
            { url: "images/asd (167).JPGE", text: "" },
            { url: "images/asd (168).JPGE", text: "" },
            { url: "images/asd (169).JPGE", text: "" },
            { url: "images/asd (170).JPGE", text: "" },
            { url: "images/asd (171).JPGE", text: "" },
            { url: "images/asd (172).JPGE", text: "" },
            { url: "images/asd (173).JPGE", text: "" },
            { url: "images/asd (174).JPGE", text: "" },
            { url: "images/asd (175).JPGE", text: "" },
            { url: "images/asd (176).JPGE", text: "" },
            { url: "images/asd (177).JPGE", text: "" },
            { url: "images/asd (178).JPGE", text: "" },
            { url: "images/asd (179).JPGE", text: "" },
            { url: "images/asd (180).JPGE", text: "" },
            { url: "images/asd (181).JPGE", text: "" },
            { url: "images/asd (182).JPGE", text: "" },
            { url: "images/asd (183).JPGE", text: "" },
            { url: "images/asd (184).JPGE", text: "" },
            { url: "images/asd (185).JPGE", text: "" },
            { url: "images/asd (186).JPGE", text: "" },
            { url: "images/asd (187).JPGE", text: "" },
            { url: "images/asd (188).JPGE", text: "" },
            { url: "images/asd (189).JPGE", text: "" },
            { url: "images/asd (190).JPGE", text: "" },
            { url: "images/asd (191).JPGE", text: "" },
            { url: "images/asd (192).JPGE", text: "" },
            { url: "images/asd (193).JPGE", text: "" },
            { url: "images/asd (194).JPGE", text: "" },
            { url: "images/asd (195).JPGE", text: "" },
            { url: "images/asd (196).JPGE", text: "" },
            { url: "images/asd (197).JPGE", text: "" },
            { url: "images/asd (198).JPGE", text: "" },
            { url: "images/asd (199).JPGE", text: "" },
            { url: "images/asd (200).JPGE", text: "" },
            { url: "images/asd (201).JPGE", text: "" },
            { url: "images/asd (202).JPGE", text: "" },
            { url: "images/asd (203).JPGE", text: "" },
            { url: "images/asd (204).JPGE", text: "" },
            { url: "images/asd (205).JPGE", text: "" },
            { url: "images/asd (206).JPGE", text: "" },
            { url: "images/asd (207).JPGE", text: "" },
            { url: "images/asd (208).JPGE", text: "" },
            { url: "images/asd (209).JPGE", text: "" },
            { url: "images/asd (210).JPGE", text: "" },
            { url: "images/asd (211).JPGE", text: "" },
            { url: "images/asd (212).JPGE", text: "" },
            { url: "images/asd (213).JPGE", text: "" },
            { url: "images/asd (214).JPGE", text: "" },
            { url: "images/asd (215).JPGE", text: "" },
            { url: "images/asd (216).JPGE", text: "" },
            { url: "images/asd (217).JPGE", text: "" },
            { url: "images/asd (218).JPGE", text: "" },
            { url: "images/asd (219).JPGE", text: "" },
            { url: "images/asd (220).JPGE", text: "" },
            { url: "images/asd (221).JPGE", text: "" },
            { url: "images/asd (222).JPGE", text: "" },
            { url: "images/asd (223).JPGE", text: "" },
            { url: "images/asd (224).JPGE", text: "" },
            { url: "images/asd (225).JPGE", text: "" },
            { url: "images/asd (226).JPGE", text: "" },
            { url: "images/asd (227).JPGE", text: "" },
            { url: "images/asd (228).JPGE", text: "" },
            { url: "images/asd (229).JPGE", text: "" },
            { url: "images/asd (230).JPGE", text: "" },
            { url: "images/asd (231).JPGE", text: "" },
            { url: "images/asd (232).JPGE", text: "" },
            { url: "images/asd (233).JPGE", text: "" },
            { url: "images/asd (234).JPGE", text: "" },
            { url: "images/asd (235).JPGE", text: "" },
            { url: "images/asd (236).JPGE", text: "" },
            { url: "images/asd (237).JPGE", text: "" },
            { url: "images/asd (238).JPGE", text: "" },
            { url: "images/asd (239).JPGE", text: "" },
            { url: "images/asd (240).JPGE", text: "" },
            { url: "images/asd (241).JPGE", text: "" },
            { url: "images/asd (242).JPGE", text: "" },
            { url: "images/asd (243).JPGE", text: "" },
            { url: "images/asd (244).JPGE", text: "" },
            { url: "images/asd (245).JPGE", text: "" },
            { url: "images/asd (246).JPGE", text: "" },
            { url: "images/asd (247).JPGE", text: "" },
            { url: "images/asd (248).JPGE", text: "" },
            { url: "images/asd (249).JPGE", text: "" },
            { url: "images/asd (250).JPGE", text: "" },
            { url: "images/asd (251).JPGE", text: "" },
            { url: "images/asd (252).JPGE", text: "" },
            { url: "images/asd (253).JPGE", text: "" },
            { url: "images/asd (254).JPGE", text: "" },
            { url: "images/asd (255).JPGE", text: "" },
            { url: "images/asd (256).JPGE", text: "" },
            { url: "images/asd (257).JPGE", text: "" },
            { url: "images/asd (258).JPGE", text: "" },
            { url: "images/asd (259).JPGE", text: "" },
            { url: "images/asd (260).JPGE", text: "" },
            { url: "images/asd (261).JPGE", text: "" },
            { url: "images/asd (262).JPGE", text: "" },
            { url: "images/asd (263).JPGE", text: "" },
            { url: "images/asd (264).JPGE", text: "" },
            { url: "images/asd (265).JPGE", text: "" },
            { url: "images/asd (266).JPGE", text: "" },
            { url: "images/asd (267).JPGE", text: "" },
            { url: "images/asd (268).JPGE", text: "" },
            { url: "images/asd (269).JPGE", text: "" },
            { url: "images/asd (270).JPGE", text: "" },
            { url: "images/asd (271).JPGE", text: "" },
            { url: "images/asd (272).JPGE", text: "" },
            { url: "images/asd (273).JPGE", text: "" },
            { url: "images/asd (274).JPGE", text: "" },
            { url: "images/asd (275).JPGE", text: "" },
            { url: "images/asd (276).JPGE", text: "" },
            { url: "images/asd (277).JPGE", text: "" },
            { url: "images/asd (278).JPGE", text: "" },
            { url: "images/asd (279).JPGE", text: "" },
            { url: "images/asd (280).JPGE", text: "" },
            { url: "images/asd (281).JPGE", text: "" },
            { url: "images/asd (282).JPGE", text: "" },
            { url: "images/asd (283).JPGE", text: "" },
            { url: "images/asd (284).JPGE", text: "" },
            { url: "images/asd (285).JPGE", text: "" },
            { url: "images/asd (286).JPGE", text: "" },
            { url: "images/asd (287).JPGE", text: "" },
            { url: "images/asd (288).JPGE", text: "" },
            { url: "images/asd (289).JPGE", text: "" },
            { url: "images/asd (290).JPGE", text: "" },
            { url: "images/asd (291).JPGE", text: "" },
            { url: "images/asd (292).JPGE", text: "" },
            { url: "images/asd (293).JPGE", text: "" },
            { url: "images/asd (294).JPGE", text: "" },
            { url: "images/asd (295).JPGE", text: "" },
            { url: "images/asd (296).JPGE", text: "" },
            { url: "images/asd (297).JPGE", text: "" },
            { url: "images/asd (298).JPGE", text: "" },
            { url: "images/asd (299).JPGE", text: "" },
            { url: "images/asd (300).JPGE", text: "" },
            { url: "images/asd (301).JPGE", text: "" },
            { url: "images/asd (302).JPGE", text: "" },
            { url: "images/asd (303).JPGE", text: "" },
            { url: "images/asd (304).JPGE", text: "" },
            { url: "images/asd (305).JPGE", text: "" },
            { url: "images/asd (306).JPGE", text: "" },
            { url: "images/asd (307).JPGE", text: "" },
            { url: "images/asd (308).JPGE", text: "" },
            { url: "images/asd (309).JPGE", text: "" },
            { url: "images/asd (310).JPGE", text: "" },
            { url: "images/asd (311).JPGE", text: "" },
            { url: "images/asd (312).JPGE", text: "" },
            { url: "images/asd (313).JPGE", text: "" },
            { url: "images/asd (314).JPGE", text: "" },
            { url: "images/asd (315).JPGE", text: "" },
            { url: "images/asd (316).JPGE", text: "" },
            { url: "images/asd (317).JPGE", text: "" },
            { url: "images/asd (318).JPGE", text: "" },
            { url: "images/asd (319).JPGE", text: "" },
            { url: "images/asd (320).JPGE", text: "" },
            { url: "images/asd (321).JPGE", text: "" },
            { url: "images/asd (322).JPGE", text: "" },
            { url: "images/asd (323).JPGE", text: "" },
            { url: "images/asd (324).JPGE", text: "" },
            { url: "images/asd (325).JPGE", text: "" },
            { url: "images/asd (326).JPGE", text: "" },
            { url: "images/asd (327).JPGE", text: "" },
            { url: "images/asd (328).JPGE", text: "" },
            { url: "images/asd (329).JPGE", text: "" },
            { url: "images/asd (330).JPGE", text: "" },
            { url: "images/asd (331).JPGE", text: "" },
            { url: "images/asd (332).JPGE", text: "" },
            { url: "images/asd (333).JPGE", text: "" },
            { url: "images/asd (334).JPGE", text: "" },
            { url: "images/asd (335).JPGE", text: "" },
            { url: "images/asd (336).JPGE", text: "" },
            { url: "images/asd (337).JPGE", text: "" },
            { url: "images/asd (338).JPGE", text: "" },
            { url: "images/asd (339).JPGE", text: "" },
            { url: "images/asd (340).JPGE", text: "" },
            { url: "images/asd (341).JPGE", text: "" },
            { url: "images/asd (342).JPGE", text: "" },
            { url: "images/asd (343).JPGE", text: "" },
            { url: "images/asd (344).JPGE", text: "" },
            { url: "images/asd (345).JPGE", text: "" },
            { url: "images/asd (346).JPGE", text: "" },
            { url: "images/asd (347).JPGE", text: "" },
            { url: "images/asd (348).JPGE", text: "" },
            { url: "images/asd (349).JPGE", text: "" },
            { url: "images/asd (350).JPGE", text: "" },
            { url: "images/asd (351).JPGE", text: "" },
            { url: "images/asd (352).JPGE", text: "" },
            { url: "images/asd (353).JPGE", text: "" },
            { url: "images/asd (354).jpg", text: "" },
            { url: "images/asd (355).JPG", text: "" },
            { url: "images/asd (356).JPG", text: "" },
            { url: "images/asd (357).JPG", text: "" },
            { url: "images/asd (358).JPG", text: "" },
            { url: "images/asd (359).JPG", text: "" },
            { url: "images/asd (360).JPG", text: "" },
            { url: "images/asd (361).JPG", text: "" },
            { url: "images/asd (362).JPG", text: "" },
            { url: "images/asd (363).jpg", text: "" },
            { url: "images/asd (364).jpg", text: "" },
            { url: "images/asd (365).png", text: "" },
            { url: "images/asd (366).png", text: "" },
 
        ];

        const gallery = document.getElementById("gallery");
        const fileInput = document.getElementById("fileInput");
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightboxImg");
        const lightboxText = document.getElementById("lightboxText");
        const lightboxClose = document.getElementById("lightboxClose");
        const openSideBtn = document.getElementById("openSideBtn");
        const closeSideBtn = document.getElementById("closeSideBtn");
        const sidePanel = document.getElementById("sidePanel");
        const welcomeModal = document.getElementById("welcomeModal");
        const welcomeImg = document.getElementById("welcomeImg");
        const welcomeText = document.getElementById("welcomeText");
        const welcomeClose = document.getElementById("welcomeClose");
        const clickTopBtn = document.getElementById("clickTopBtn");
        const topButton = document.querySelector(".top_button");
        const openUploadBtn = document.getElementById("openUploadBtn");
        const closeUploadBtn = document.getElementById("closeUploadBtn");
        const uploadPanel = document.getElementById("uploadPanel");
        const captionInput = document.getElementById("captionInput");
        const submitUploadBtn = document.getElementById("submitUploadBtn");
        const fileList = document.getElementById("fileList");
        const uploadArea = document.querySelector(".upload-area");
        const uploadStatus = document.getElementById("uploadStatus");

        let allImages = [];
        let lastFocusedEl = null;
        let selectedFiles = [];

        function shuffle(array) {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        }

        async function loadImagesFromFirebase() {
            try {
                const q = query(collection(db, "gallery"), orderBy("timestamp", "desc"));
                const querySnapshot = await getDocs(q);
                const firebaseImages = [];

                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    firebaseImages.push({
                        url: data.imageData,
                        text: data.caption || ""
                    });
                });

                return firebaseImages;
            } catch (error) {
                console.error("Firebase 이미지 로드 실패:", error);
                return [];
            }
        }

        function renderGallery(images) {
            gallery.innerHTML = "";
            const fragment = document.createDocumentFragment();

            images.forEach((item) => {
                const a = document.createElement("a");
                a.className = "photo";
                a.href = item.url;
                a.setAttribute("aria-label", "이미지 보기");

                const img = document.createElement("img");
                img.src = item.url;
                img.alt = "갤러리 이미지";

                img.addEventListener("error", () => {
                    img.style.opacity = 0.6;
                    img.alt = "이미지 로드 실패";
                });

                a.addEventListener("click", (e) => {
                    e.preventDefault();
                    openLightbox(item.url, item.text);
                });

                a.appendChild(img);
                fragment.appendChild(a);
            });

            gallery.appendChild(fragment);
        }

        fileInput.addEventListener("change", (e) => {
            const files = Array.from(e.target.files).filter((f) =>
                f.type.startsWith("image/")
            );

            if (files.length === 0) return;
            selectedFiles = files;
            displayFileList(files);
            e.target.value = "";
        });

        function displayFileList(files) {
            fileList.innerHTML = "";

            files.forEach((file, index) => {
                const fileItem = document.createElement("div");
                fileItem.className = "file-item";

                const fileName = document.createElement("span");
                fileName.className = "file-item-name";
                fileName.textContent = file.name;

                const removeBtn = document.createElement("button");
                removeBtn.className = "file-item-remove";
                removeBtn.textContent = "✕";
                removeBtn.onclick = () => removeFile(index);

                fileItem.appendChild(fileName);
                fileItem.appendChild(removeBtn);
                fileList.appendChild(fileItem);
            });
        }

        function removeFile(index) {
            selectedFiles.splice(index, 1);
            displayFileList(selectedFiles);
        }

        uploadArea.addEventListener("dragover", (e) => {
            e.preventDefault();
            uploadArea.classList.add("drag-over");
        });

        uploadArea.addEventListener("dragleave", () => {
            uploadArea.classList.remove("drag-over");
        });

        uploadArea.addEventListener("drop", (e) => {
            e.preventDefault();
            uploadArea.classList.remove("drag-over");

            const files = Array.from(e.dataTransfer.files).filter((f) =>
                f.type.startsWith("image/")
            );

            if (files.length > 0) {
                selectedFiles = files;
                displayFileList(files);
            }
        });

        function fileToBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        }

        function showStatus(message, isError = false) {
            uploadStatus.textContent = message;
            uploadStatus.style.background = isError ?
                'rgba(255, 0, 0, 0.3)' :
                'rgba(0, 255, 0, 0.3)';
            uploadStatus.classList.add('show');

            setTimeout(() => {
                uploadStatus.classList.remove('show');
            }, 3000);
        }

        submitUploadBtn.addEventListener("click", async () => {
            if (selectedFiles.length === 0) {
                alert("이미지를 선택해주세요!");
                return;
            }

            const caption = captionInput.value.trim();

            submitUploadBtn.disabled = true;
            submitUploadBtn.textContent = "업로드 중...";
            showStatus("업로드 중입니다...");

            try {
                for (const file of selectedFiles) {
                    if (file.size > 1024 * 1024) {
                        showStatus(`${file.name}은(는) 너무 큽니다 (1MB 이하만 가능)`, true);
                        continue;
                    }

                    const base64Data = await fileToBase64(file);
                    const timestamp = Date.now();

                    await addDoc(collection(db, "gallery"), {
                        imageData: base64Data,
                        caption: caption,
                        timestamp: timestamp
                    });

                    allImages.unshift({
                        url: base64Data,
                        text: caption
                    });
                }

                renderGallery(shuffle(allImages));

                showStatus("업로드 완료! 🎉");
                closeUploadPanel();
                resetUploadForm();

            } catch (error) {
                console.error("업로드 실패:", error);
                showStatus("업로드 실패. 다시 시도해주세요.", true);
            } finally {
                submitUploadBtn.disabled = false;
                submitUploadBtn.textContent = "OK!";
            }
        });

        function resetUploadForm() {
            selectedFiles = [];
            fileList.innerHTML = "";
            captionInput.value = "";
            fileInput.value = "";
        }

        function openLightbox(url, text) {
            lastFocusedEl = document.activeElement;
            lightboxImg.src = url;
            lightboxText.textContent = text || "";

            lightbox.setAttribute("aria-hidden", "false");
            lightbox.classList.add("open");
            document.body.style.overflow = "hidden";

            lightboxClose.focus();

            document.addEventListener("focus", enforceFocus, true);
            lightbox.addEventListener("keydown", trapTabKey);
        }

        function closeLightbox() {
            lightbox.classList.remove("open");
            lightbox.setAttribute("aria-hidden", "true");
            lightboxImg.src = "";
            lightboxText.textContent = "";
            document.body.style.overflow = "";

            document.removeEventListener("focus", enforceFocus, true);
            lightbox.removeEventListener("keydown", trapTabKey);

            if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
                lastFocusedEl.focus();
            }
        }

        function enforceFocus(e) {
            if (!lightbox.classList.contains("open")) return;
            if (!lightbox.contains(e.target)) {
                e.stopPropagation();
                lightboxClose.focus();
            }
        }

        function trapTabKey(e) {
            if (e.key !== "Tab") return;

            const focusable = Array.from(
                lightbox.querySelectorAll(
                    'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'
                )
            ).filter((el) => !el.disabled && el.offsetParent !== null);

            if (focusable.length === 0) {
                e.preventDefault();
                return;
            }

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }

        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) closeLightbox();
        });
        lightboxClose.addEventListener("click", closeLightbox);

        openSideBtn.addEventListener("click", openSidePanel);
        closeSideBtn.addEventListener("click", closeSidePanel);


        function openSidePanel() {
            sidePanel.classList.add("open");
            sidePanel.setAttribute("aria-hidden", "false");
            openSideBtn.parentElement.classList.add("hidden");
            closeSideBtn.focus();
        }

        function closeSidePanel() {
            sidePanel.classList.remove("open");
            sidePanel.setAttribute("aria-hidden", "true");
            openSideBtn.parentElement.classList.remove("hidden");
            openSideBtn.focus();
        }

       

        function openUploadPanel() {
            uploadPanel.classList.add("open");
            uploadPanel.setAttribute("aria-hidden", "false");
            openUploadBtn.parentElement.classList.add("hidden");
            closeUploadBtn.focus();
        }

        function closeUploadPanel() {
            uploadPanel.classList.remove("open");
            uploadPanel.setAttribute("aria-hidden", "true");
            openUploadBtn.parentElement.classList.remove("hidden");
            openUploadBtn.focus();
        }

        openUploadBtn.addEventListener("click", openUploadPanel);
        closeUploadBtn.addEventListener("click", closeUploadPanel);

        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                if (lightbox.classList.contains("open")) {
                    closeLightbox();
                } else if (sidePanel.classList.contains("open")) {
                    closeSidePanel();
                } else if (uploadPanel.classList.contains("open")) {
                    closeUploadPanel();
                } else if (!welcomeModal.classList.contains("hidden")) {
                    closeWelcomeModal();
                }
            }
        });

        function getTodayImageIndex() {
            const today = new Date();
            const dateNumber = today.getFullYear() * 10000 +
                (today.getMonth() + 1) * 100 +
                today.getDate();

            return dateNumber % defaultImages.length;
        }

        function showWelcomeModal() {
            const todayIndex = getTodayImageIndex();
            const todayImage = defaultImages[todayIndex];

            welcomeImg.src = todayImage.url;
            welcomeText.textContent = todayImage.text || "";

            welcomeModal.setAttribute("aria-hidden", "false");
            welcomeModal.classList.remove("hidden");
            document.body.style.overflow = "hidden";

            welcomeClose.focus();
        }

        function closeWelcomeModal() {
            welcomeModal.classList.add("hidden");
            welcomeModal.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "";
        }

        welcomeClose.addEventListener("click", closeWelcomeModal);

        welcomeModal.addEventListener("click", (e) => {
            if (e.target === welcomeModal) {
                closeWelcomeModal();
            }
        });

        clickTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                topButton.classList.remove("hidden");
            } else {
                topButton.classList.add("hidden");
            }
        }, { passive: true });

        async function init() {
            const firebaseImages = await loadImagesFromFirebase();
            allImages = [...firebaseImages, ...defaultImages];

            const shuffledImages = shuffle(allImages);
            renderGallery(shuffledImages);

            showWelcomeModal();
        }


        window.addEventListener("load", init);



