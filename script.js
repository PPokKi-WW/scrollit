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

        const defaultImages = [ { url: "images/asd (55).JPEG", text: "" },
                    { url: "images/asd (56).JPEG", text: "" },
        { url: "images/asd (57).JPEG", text: "" },
        { url: "images/asd (58).JPEG", text: "" },
        { url: "images/asd (59).JPEG", text: "" },
        { url: "images/asd (60).JPEG", text: "" },
        { url: "images/asd (61).JPEG", text: "" },
        { url: "images/asd (62).JPEG", text: "" },
        { url: "images/asd (63).JPEG", text: "" },
        { url: "images/asd (64).JPEG", text: "" },
        { url: "images/asd (65).JPEG", text: "" },
        { url: "images/asd (66).JPEG", text: "" },
        { url: "images/asd (67).JPEG", text: "" },
        { url: "images/asd (68).JPEG", text: "" },
        { url: "images/asd (69).JPEG", text: "" },
        { url: "images/asd (70).JPEG", text: "" },
        { url: "images/asd (71).JPEG", text: "" },
        { url: "images/asd (72).JPEG", text: "" },
        { url: "images/asd (73).JPEG", text: "" },
        { url: "images/asd (74).JPEG", text: "" },
        { url: "images/asd (75).JPEG", text: "" },
        { url: "images/asd (76).JPEG", text: "" },
        { url: "images/asd (77).JPEG", text: "" },
        { url: "images/asd (78).JPEG", text: "" },
        { url: "images/asd (79).JPEG", text: "" },
        { url: "images/asd (80).JPEG", text: "" },
        { url: "images/asd (81).JPEG", text: "" },
        { url: "images/asd (82).JPEG", text: "" },
        { url: "images/asd (83).JPEG", text: "" },
        { url: "images/asd (84).JPEG", text: "" },
        { url: "images/asd (85).JPEG", text: "" },
        { url: "images/asd (86).JPEG", text: "" },
        { url: "images/asd (87).JPEG", text: "" },
        { url: "images/asd (88).JPEG", text: "" },
        { url: "images/asd (89).JPEG", text: "" },
        { url: "images/asd (90).JPEG", text: "" },
        { url: "images/asd (91).JPEG", text: "" },
        { url: "images/asd (92).JPEG", text: "" },
        { url: "images/asd (93).JPEG", text: "" },
        { url: "images/asd (94).JPEG", text: "" },
        { url: "images/asd (95).JPEG", text: "" },
        { url: "images/asd (96).JPEG", text: "" },
        { url: "images/asd (97).JPEG", text: "" },
        { url: "images/asd (98).JPEG", text: "" },
        { url: "images/asd (99).JPEG", text: "" },
        { url: "images/asd (100).JPEG", text: "" },
        { url: "images/asd (101).JPEG", text: "" },
        { url: "images/asd (102).JPEG", text: "" },
        { url: "images/asd (103).JPEG", text: "" },
        { url: "images/asd (104).JPEG", text: "" },
        { url: "images/asd (105).JPEG", text: "" },
        { url: "images/asd (106).JPEG", text: "" },
        { url: "images/asd (107).JPEG", text: "" },
        { url: "images/asd (108).JPEG", text: "" },
        { url: "images/asd (109).JPEG", text: "" },
        { url: "images/asd (110).JPEG", text: "" },
        { url: "images/asd (111).JPEG", text: "" },
        { url: "images/asd (112).JPEG", text: "" },
        { url: "images/asd (113).JPEG", text: "" },
        { url: "images/asd (114).JPEG", text: "" },
        { url: "images/asd (115).JPEG", text: "" },
        { url: "images/asd (116).JPEG", text: "" },
        { url: "images/asd (117).JPEG", text: "" },
        { url: "images/asd (118).JPEG", text: "" },
        { url: "images/asd (119).JPEG", text: "" },
        { url: "images/asd (120).JPEG", text: "" },
        { url: "images/asd (121).JPEG", text: "" },
        { url: "images/asd (122).JPEG", text: "" },
        { url: "images/asd (123).JPEG", text: "" },
        { url: "images/asd (124).JPEG", text: "" },
        { url: "images/asd (125).JPEG", text: "" },
        { url: "images/asd (126).JPEG", text: "" },
        { url: "images/asd (127).JPEG", text: "" },
        { url: "images/asd (128).JPEG", text: "" },
        { url: "images/asd (129).JPEG", text: "" },
        { url: "images/asd (130).JPEG", text: "" },
        { url: "images/asd (131).JPEG", text: "" },
        { url: "images/asd (132).JPEG", text: "" },
        { url: "images/asd (133).JPEG", text: "" },
        { url: "images/asd (134).JPEG", text: "" },
        { url: "images/asd (135).JPEG", text: "" },
        { url: "images/asd (136).JPEG", text: "" },
        { url: "images/asd (137).JPEG", text: "" },
        { url: "images/asd (138).JPEG", text: "" },
        { url: "images/asd (139).JPEG", text: "" },
        { url: "images/asd (140).JPEG", text: "" },
        { url: "images/asd (141).JPEG", text: "" },
        { url: "images/asd (142).JPEG", text: "" },
        { url: "images/asd (143).JPEG", text: "" },
        { url: "images/asd (144).JPEG", text: "" },
        { url: "images/asd (145).JPEG", text: "" },
        { url: "images/asd (146).JPEG", text: "" },
        { url: "images/asd (147).JPEG", text: "" },
        { url: "images/asd (148).JPEG", text: "" },
        { url: "images/asd (149).JPEG", text: "" },
        { url: "images/asd (150).JPEG", text: "" },
        { url: "images/asd (151).JPEG", text: "" },
        { url: "images/asd (152).JPEG", text: "" },
        { url: "images/asd (153).JPEG", text: "" },
        { url: "images/asd (154).JPEG", text: "" },
        { url: "images/asd (155).JPEG", text: "" },
        { url: "images/asd (156).JPEG", text: "" },
        { url: "images/asd (157).JPEG", text: "" },
        { url: "images/asd (158).JPEG", text: "" },
        { url: "images/asd (159).JPEG", text: "" },
        { url: "images/asd (160).JPEG", text: "" },
        { url: "images/asd (161).JPEG", text: "" },
        { url: "images/asd (162).JPEG", text: "" },
        { url: "images/asd (163).JPEG", text: "" },
        { url: "images/asd (164).JPEG", text: "" },
        { url: "images/asd (165).JPEG", text: "" },
        { url: "images/asd (166).JPEG", text: "" },
        { url: "images/asd (167).JPEG", text: "" },
        { url: "images/asd (168).JPEG", text: "" },
        { url: "images/asd (169).JPEG", text: "" },
        { url: "images/asd (170).JPEG", text: "" },
        { url: "images/asd (171).JPEG", text: "" },
        { url: "images/asd (172).JPEG", text: "" },
        { url: "images/asd (173).JPEG", text: "" },
        { url: "images/asd (174).JPEG", text: "" },
        { url: "images/asd (175).JPEG", text: "" },
        { url: "images/asd (176).JPEG", text: "" },
        { url: "images/asd (177).JPEG", text: "" },
        { url: "images/asd (178).JPEG", text: "" },
        { url: "images/asd (179).JPEG", text: "" },
        { url: "images/asd (180).JPEG", text: "" },
        { url: "images/asd (181).JPEG", text: "" },
        { url: "images/asd (182).JPEG", text: "" },
        { url: "images/asd (183).JPEG", text: "" },
        { url: "images/asd (184).JPEG", text: "" },
        { url: "images/asd (185).JPEG", text: "" },
        { url: "images/asd (186).JPEG", text: "" },
        { url: "images/asd (187).JPEG", text: "" },
        { url: "images/asd (188).JPEG", text: "" },
        { url: "images/asd (189).JPEG", text: "" },
        { url: "images/asd (190).JPEG", text: "" },
        { url: "images/asd (191).JPEG", text: "" },
        { url: "images/asd (192).JPEG", text: "" },
        { url: "images/asd (193).JPEG", text: "" },
        { url: "images/asd (194).JPEG", text: "" },
        { url: "images/asd (195).JPEG", text: "" },
        { url: "images/asd (196).JPEG", text: "" },
        { url: "images/asd (197).JPEG", text: "" },
        { url: "images/asd (198).JPEG", text: "" },
        { url: "images/asd (199).JPEG", text: "" },
        { url: "images/asd (200).JPEG", text: "" },
        { url: "images/asd (201).JPEG", text: "" },
        { url: "images/asd (202).JPEG", text: "" },
        { url: "images/asd (203).JPEG", text: "" },
        { url: "images/asd (204).JPEG", text: "" },
        { url: "images/asd (205).JPEG", text: "" },
        { url: "images/asd (206).JPEG", text: "" },
        { url: "images/asd (207).JPEG", text: "" },
        { url: "images/asd (208).JPEG", text: "" },
        { url: "images/asd (209).JPEG", text: "" },
        { url: "images/asd (210).JPEG", text: "" },
        { url: "images/asd (211).JPEG", text: "" },
        { url: "images/asd (212).JPEG", text: "" },
        { url: "images/asd (213).JPEG", text: "" },
        { url: "images/asd (214).JPEG", text: "" },
        { url: "images/asd (215).JPEG", text: "" },
        { url: "images/asd (216).JPEG", text: "" },
        { url: "images/asd (217).JPEG", text: "" },
        { url: "images/asd (218).JPEG", text: "" },
        { url: "images/asd (219).JPEG", text: "" },
        { url: "images/asd (220).JPEG", text: "" },
        { url: "images/asd (221).JPEG", text: "" },
        { url: "images/asd (222).JPEG", text: "" },
        { url: "images/asd (223).JPEG", text: "" },
        { url: "images/asd (224).JPEG", text: "" },
        { url: "images/asd (225).JPEG", text: "" },
        { url: "images/asd (226).JPEG", text: "" },
        { url: "images/asd (227).JPEG", text: "" },
        { url: "images/asd (228).JPEG", text: "" },
        { url: "images/asd (229).JPEG", text: "" },
        { url: "images/asd (230).JPEG", text: "" },
        { url: "images/asd (231).JPEG", text: "" },
        { url: "images/asd (232).JPEG", text: "" },
        { url: "images/asd (233).JPEG", text: "" },
        { url: "images/asd (234).JPEG", text: "" },
        { url: "images/asd (235).JPEG", text: "" },
        { url: "images/asd (236).JPEG", text: "" },
        { url: "images/asd (237).JPEG", text: "" },
        { url: "images/asd (238).JPEG", text: "" },
        { url: "images/asd (239).JPEG", text: "" },
        { url: "images/asd (240).JPEG", text: "" },
        { url: "images/asd (241).JPEG", text: "" },
        { url: "images/asd (242).JPEG", text: "" },
        { url: "images/asd (243).JPEG", text: "" },
        { url: "images/asd (244).JPEG", text: "" },
        { url: "images/asd (245).JPEG", text: "" },
        { url: "images/asd (246).JPEG", text: "" },
        { url: "images/asd (247).JPEG", text: "" },
        { url: "images/asd (248).JPEG", text: "" },
        { url: "images/asd (249).JPEG", text: "" },
        { url: "images/asd (250).JPEG", text: "" },
        { url: "images/asd (251).JPEG", text: "" },
        { url: "images/asd (252).JPEG", text: "" },
        { url: "images/asd (253).JPEG", text: "" },
        { url: "images/asd (254).JPEG", text: "" },
        { url: "images/asd (255).JPEG", text: "" },
        { url: "images/asd (256).JPEG", text: "" },
        { url: "images/asd (257).JPEG", text: "" },
        { url: "images/asd (258).JPEG", text: "" },
        { url: "images/asd (259).JPEG", text: "" },
        { url: "images/asd (260).JPEG", text: "" },
        { url: "images/asd (261).JPEG", text: "" },
        { url: "images/asd (262).JPEG", text: "" },
        { url: "images/asd (263).JPEG", text: "" },
        { url: "images/asd (264).JPEG", text: "" },
        { url: "images/asd (265).JPEG", text: "" },
        { url: "images/asd (266).JPEG", text: "" },
        { url: "images/asd (267).JPEG", text: "" },
        { url: "images/asd (268).JPEG", text: "" },
        { url: "images/asd (269).JPEG", text: "" },
        { url: "images/asd (270).JPEG", text: "" },
        { url: "images/asd (271).JPEG", text: "" },
        { url: "images/asd (272).JPEG", text: "" },
        { url: "images/asd (273).JPEG", text: "" },
        { url: "images/asd (274).JPEG", text: "" },
        { url: "images/asd (275).JPEG", text: "" },
        { url: "images/asd (276).JPEG", text: "" },
        { url: "images/asd (277).JPEG", text: "" },
        { url: "images/asd (278).JPEG", text: "" },
        { url: "images/asd (279).JPEG", text: "" },
        { url: "images/asd (280).JPEG", text: "" },
        { url: "images/asd (281).JPEG", text: "" },
        { url: "images/asd (282).JPEG", text: "" },
        { url: "images/asd (283).JPEG", text: "" },
        { url: "images/asd (284).JPEG", text: "" },
        { url: "images/asd (285).JPEG", text: "" },
        { url: "images/asd (286).JPEG", text: "" },
        { url: "images/asd (287).JPEG", text: "" },
        { url: "images/asd (288).JPEG", text: "" },
        { url: "images/asd (289).JPEG", text: "" },
        { url: "images/asd (290).JPEG", text: "" },
        { url: "images/asd (291).JPEG", text: "" },
        { url: "images/asd (292).JPEG", text: "" },
        { url: "images/asd (293).JPEG", text: "" },
        { url: "images/asd (294).JPEG", text: "" },
        { url: "images/asd (295).JPEG", text: "" },
        { url: "images/asd (296).JPEG", text: "" },
        { url: "images/asd (297).JPEG", text: "" },
        { url: "images/asd (298).JPEG", text: "" },
        { url: "images/asd (299).JPEG", text: "" },
        { url: "images/asd (300).JPEG", text: "" },
        { url: "images/asd (301).JPEG", text: "" },
        { url: "images/asd (302).JPEG", text: "" },
        { url: "images/asd (303).JPEG", text: "" },
        { url: "images/asd (304).JPEG", text: "" },
        { url: "images/asd (305).JPEG", text: "" },
        { url: "images/asd (306).JPEG", text: "" },
        { url: "images/asd (307).JPEG", text: "" },
        { url: "images/asd (308).JPEG", text: "" },
        { url: "images/asd (309).JPEG", text: "" },
        { url: "images/asd (310).JPEG", text: "" },
        { url: "images/asd (311).JPEG", text: "" },
        { url: "images/asd (312).JPEG", text: "" },
        { url: "images/asd (313).JPEG", text: "" },
        { url: "images/asd (314).JPEG", text: "" },
        { url: "images/asd (315).JPEG", text: "" },
        { url: "images/asd (316).JPEG", text: "" },
        { url: "images/asd (317).JPEG", text: "" },
        { url: "images/asd (318).JPEG", text: "" },
        { url: "images/asd (319).JPEG", text: "" },
        { url: "images/asd (320).JPEG", text: "" },
        { url: "images/asd (321).JPEG", text: "" },
        { url: "images/asd (322).JPEG", text: "" },
        { url: "images/asd (323).JPEG", text: "" },
        { url: "images/asd (324).JPEG", text: "" },
        { url: "images/asd (325).JPEG", text: "" },
        { url: "images/asd (326).JPEG", text: "" },
        { url: "images/asd (327).JPEG", text: "" },
        { url: "images/asd (328).JPEG", text: "" },
        { url: "images/asd (329).JPEG", text: "" },
        { url: "images/asd (330).JPEG", text: "" },
        { url: "images/asd (331).JPEG", text: "" },
        { url: "images/asd (332).JPEG", text: "" },
        { url: "images/asd (333).JPEG", text: "" },
        { url: "images/asd (334).JPEG", text: "" },
        { url: "images/asd (335).JPEG", text: "" },
        { url: "images/asd (336).JPEG", text: "" },
        { url: "images/asd (337).JPEG", text: "" },
        { url: "images/asd (338).JPEG", text: "" },
        { url: "images/asd (339).JPEG", text: "" },
        { url: "images/asd (340).JPEG", text: "" },
        { url: "images/asd (341).JPEG", text: "" },
        { url: "images/asd (342).JPEG", text: "" },
        { url: "images/asd (343).JPEG", text: "" },
        { url: "images/asd (344).JPEG", text: "" },
        { url: "images/asd (345).JPEG", text: "" },
        { url: "images/asd (346).JPEG", text: "" },
        { url: "images/asd (347).JPEG", text: "" },
        { url: "images/asd (348).JPEG", text: "" },
        { url: "images/asd (349).JPEG", text: "" },
        { url: "images/asd (350).JPEG", text: "" },
        { url: "images/asd (351).JPEG", text: "" },
        { url: "images/asd (352).JPEG", text: "" },
        { url: "images/asd (353).JPEG", text: "" },
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




