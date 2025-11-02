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
           { url: "images/asd (366).png", text: "이것은 첫 번째 이미지입니다.\n여기에 원하는 설명을 작성하세요." },
            { url: "images/asd (365).png", text: "두 번째 이미지의 설명\n여러 줄로 작성할 수 있습니다." },
            { url: "images/asd (364).jpg", text: "세 번째 이미지" },
            { url: "images/asd (355).jpg", text: "" },
            { url: "images/asd (356).jpg", text: "" },
{ url: "images/asd (357).jpg", text: "" },
{ url: "images/asd (358).jpg", text: "" },
{ url: "images/asd (359).jpg", text: "" },
{ url: "images/asd (360).jpg", text: "" },
{ url: "images/asd (361).jpg", text: "" },
{ url: "images/asd (362).jpg", text: "" },
{ url: "images/asd (363).JPEG", text: "" },
 
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


