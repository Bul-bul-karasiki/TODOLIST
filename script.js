// ==================== LANGUAGE SWITCHER ====================
const languageManager = {
    currentLang: 'uk',
    
    translations: {
        uk: {
            language: "Мова",
            searchPlaceholder: "Пошук мов...",
            placeholder: "Додайте справу",
            shareToggle: "📡 Спільний доступ",
            shareToggleClose: "📡 Закрити спільний доступ",
            yourId: "Твій ID:",
            connectFriend: "Підключитись до друга:",
            friendIdPlaceholder: "Введіть ID друга",
            connected: "Підключено до друга! 🎉",
            copied: "ID скопійовано! 📋",
            disconnected: "Відключено ❌"
        },
        en: {
            language: "Language",
            searchPlaceholder: "Search languages...",
            placeholder: "Add a task",
            shareToggle: "📡 Shared access",
            shareToggleClose: "📡 Close shared access",
            yourId: "Your ID:",
            connectFriend: "Connect to friend:",
            friendIdPlaceholder: "Enter friend's ID",
            connected: "Connected to friend! 🎉",
            copied: "ID copied! 📋",
            disconnected: "Disconnected ❌"
        },
        bg: {
            language: "Език",
            searchPlaceholder: "Търсене на езици...",
            placeholder: "Добави задача",
            shareToggle: "📡 Споделен достъп",
            shareToggleClose: "📡 Затвори споделен достъп",
            yourId: "Твоят ID:",
            connectFriend: "Свържи се с приятел:",
            friendIdPlaceholder: "Въведи ID на приятел",
            connected: "Свързан с приятел! 🎉",
            copied: "ID копиран! 📋",
            disconnected: "Прекъсната връзка ❌"
        },
        es: {
            language: "Idioma",
            searchPlaceholder: "Buscar idiomas...",
            placeholder: "Añadir una tarea",
            shareToggle: "📡 Acceso compartido",
            shareToggleClose: "📡 Cerrar acceso compartido",
            yourId: "Tu ID:",
            connectFriend: "Conectar con amigo:",
            friendIdPlaceholder: "Ingresa el ID del amigo",
            connected: "¡Conectado con amigo! 🎉",
            copied: "¡ID copiado! 📋",
            disconnected: "Desconectado ❌"
        },
        fr: {
            language: "Langue",
            searchPlaceholder: "Rechercher des langues...",
            placeholder: "Ajouter une tâche",
            shareToggle: "📡 Accès partagé",
            shareToggleClose: "📡 Fermer l'accès partagé",
            yourId: "Ton ID:",
            connectFriend: "Se connecter à un ami:",
            friendIdPlaceholder: "Entrez l'ID de l'ami",
            connected: "Connecté à l'ami ! 🎉",
            copied: "ID copié ! 📋",
            disconnected: "Déconnecté ❌"
        },
        de: {
            language: "Sprache",
            searchPlaceholder: "Sprachen suchen...",
            placeholder: "Aufgabe hinzufügen",
            shareToggle: "📡 Gemeinsamer Zugriff",
            shareToggleClose: "📡 Gemeinsamen Zugriff schließen",
            yourId: "Deine ID:",
            connectFriend: "Mit Freund verbinden:",
            friendIdPlaceholder: "Freund-ID eingeben",
            connected: "Mit Freund verbunden! 🎉",
            copied: "ID kopiert! 📋",
            disconnected: "Getrennt ❌"
        },
        pl: {
            language: "Język",
            searchPlaceholder: "Szukaj języków...",
            placeholder: "Dodaj zadanie",
            shareToggle: "📡 Wspólny dostęp",
            shareToggleClose: "📡 Zamknij wspólny dostęp",
            yourId: "Twój ID:",
            connectFriend: "Połącz z przyjacielem:",
            friendIdPlaceholder: "Wprowadź ID przyjaciela",
            connected: "Połączono z przyjacielem! 🎉",
            copied: "ID skopiowane! 📋",
            disconnected: "Rozłączono ❌"
        },
        it: {
            language: "Lingua",
            searchPlaceholder: "Cerca lingue...",
            placeholder: "Aggiungi un'attività",
            shareToggle: "📡 Accesso condiviso",
            shareToggleClose: "📡 Chiudi accesso condiviso",
            yourId: "Il tuo ID:",
            connectFriend: "Connetti con amico:",
            friendIdPlaceholder: "Inserisci ID dell'amico",
            connected: "Connesso con l'amico! 🎉",
            copied: "ID copiato! 📋",
            disconnected: "Disconnesso ❌"
        },
        pt: {
            language: "Idioma",
            searchPlaceholder: "Pesquisar idiomas...",
            placeholder: "Adicionar uma tarefa",
            shareToggle: "📡 Acesso compartilhado",
            shareToggleClose: "📡 Fechar acesso compartilhado",
            yourId: "Seu ID:",
            connectFriend: "Conectar com amigo:",
            friendIdPlaceholder: "Digite o ID do amigo",
            connected: "Conectado com amigo! 🎉",
            copied: "ID copiado! 📋",
            disconnected: "Desconectado ❌"
        },
        ja: {
            language: "言語",
            searchPlaceholder: "言語を検索...",
            placeholder: "タスクを追加",
            shareToggle: "📡 共有アクセス",
            shareToggleClose: "📡 共有アクセスを閉じる",
            yourId: "あなたのID:",
            connectFriend: "友達に接続:",
            friendIdPlaceholder: "友達のIDを入力",
            connected: "友達に接続しました！🎉",
            copied: "IDをコピーしました！📋",
            disconnected: "切断されました ❌"
        },
        ko: {
            language: "언어",
            searchPlaceholder: "언어 검색...",
            placeholder: "할 일 추가",
            shareToggle: "📡 공유 액세스",
            shareToggleClose: "📡 공유 액세스 닫기",
            yourId: "당신의 ID:",
            connectFriend: "친구에게 연결:",
            friendIdPlaceholder: "친구 ID 입력",
            connected: "친구에게 연결되었습니다! 🎉",
            copied: "ID가 복사되었습니다! 📋",
            disconnected: "연결 끊김 ❌"
        },
        zh: {
            language: "语言",
            searchPlaceholder: "搜索语言...",
            placeholder: "添加任务",
            shareToggle: "📡 共享访问",
            shareToggleClose: "📡 关闭共享访问",
            yourId: "你的ID:",
            connectFriend: "连接到朋友:",
            friendIdPlaceholder: "输入朋友ID",
            connected: "已连接到朋友！🎉",
            copied: "ID已复制！📋",
            disconnected: "已断开连接 ❌"
        },
        ar: {
            language: "اللغة",
            searchPlaceholder: "بحث عن اللغات...",
            placeholder: "أضف مهمة",
            shareToggle: "📡 الوصول المشترك",
            shareToggleClose: "📡 إغلاق الوصول المشترك",
            yourId: "معرفك:",
            connectFriend: "الاتصال بصديق:",
            friendIdPlaceholder: "أدخل معرف الصديق",
            connected: "تم الاتصال بالصديق! 🎉",
            copied: "تم نسخ المعرف! 📋",
            disconnected: "تم قطع الاتصال ❌"
        },
        ru: {
            language: "Язык",
            searchPlaceholder: "Поиск языков...",
            placeholder: "Добавить задачу",
            shareToggle: "📡 Общий доступ",
            shareToggleClose: "📡 Закрыть общий доступ",
            yourId: "Твой ID:",
            connectFriend: "Подключиться к другу:",
            friendIdPlaceholder: "Введите ID друга",
            connected: "Подключено к другу! 🎉",
            copied: "ID скопирован! 📋",
            disconnected: "Отключено ❌"
        },
        nl: {
            language: "Taal",
            searchPlaceholder: "Talen zoeken...",
            placeholder: "Voeg een taak toe",
            shareToggle: "📡 Gedeelde toegang",
            shareToggleClose: "📡 Sluit gedeelde toegang",
            yourId: "Jouw ID:",
            connectFriend: "Verbinden met vriend:",
            friendIdPlaceholder: "Voer vriend ID in",
            connected: "Verbonden met vriend! 🎉",
            copied: "ID gekopieerd! 📋",
            disconnected: "Verbinding verbroken ❌"
        },
        sv: {
            language: "Språk",
            searchPlaceholder: "Sök språk...",
            placeholder: "Lägg till en uppgift",
            shareToggle: "📡 Delad åtkomst",
            shareToggleClose: "📡 Stäng delad åtkomst",
            yourId: "Ditt ID:",
            connectFriend: "Anslut till vän:",
            friendIdPlaceholder: "Ange väns ID",
            connected: "Ansluten till vän! 🎉",
            copied: "ID kopierat! 📋",
            disconnected: "Nedkopplad ❌"
        },
        tr: {
            language: "Dil",
            searchPlaceholder: "Dilleri ara...",
            placeholder: "Görev ekle",
            shareToggle: "📡 Paylaşılan erişim",
            shareToggleClose: "📡 Paylaşılan erişimi kapat",
            yourId: "Senin ID:",
            connectFriend: "Arkadaşa bağlan:",
            friendIdPlaceholder: "Arkadaş ID'sini gir",
            connected: "Arkadaşa bağlandı! 🎉",
            copied: "ID kopyalandı! 📋",
            disconnected: "Bağlantı kesildi ❌"
        },
        hi: {
            language: "भाषा",
            searchPlaceholder: "भाषाएं खोजें...",
            placeholder: "काम जोड़ें",
            shareToggle: "📡 साझा पहुंच",
            shareToggleClose: "📡 साझा पहुंच बंद करें",
            yourId: "आपकी आईडी:",
            connectFriend: "दोस्त से कनेक्ट करें:",
            friendIdPlaceholder: "दोस्त की आईडी दर्ज करें",
            connected: "दोस्त से जुड़ गया! 🎉",
            copied: "आईडी कॉपी की गई! 📋",
            disconnected: "डिस्कनेक्ट हो गया ❌"
        }
    },

    init() {
        this.setupEventListeners();
        this.loadSavedLanguage();
        this.highlightSelectedLanguage();
    },

    setupEventListeners() {
        const langBtn = document.querySelector('.language-btn');
        const dropdown = document.querySelector('.language-dropdown');
        const searchInput = document.querySelector('.language-search');

        // Перемикання випадаючого списку
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            if (dropdown.classList.contains('active')) {
                // Закриття з анімацією
                this.hideDropdown();
            } else {
                // Відкриття з анімацією
                this.showDropdown();
            }
        });

        // Закриття випадаючого списку при кліку поза ним
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-switcher') && dropdown.classList.contains('active')) {
                this.hideDropdown();
            }
        });

        // Пошук мов
        searchInput.addEventListener('input', (e) => {
            this.filterLanguages(e.target.value);
        });

        // Обробник вибору мови
        dropdown.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON' && e.target.dataset.lang) {
                this.switchLanguage(e.target.dataset.lang);
                this.hideDropdown();
            }
        });

        // Запобігання закриттю при кліку всередині випадаючого списку
        dropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Закриття при натисканні Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && dropdown.classList.contains('active')) {
                this.hideDropdown();
            }
        });
    },

    showDropdown() {
        const dropdown = document.querySelector('.language-dropdown');
        const searchInput = document.querySelector('.language-search');
        
        dropdown.style.display = 'flex';
        dropdown.classList.remove('hiding');
        
        // Додаємо active клас після невеликої затримки для запуску анімації
        setTimeout(() => {
            dropdown.classList.add('active');
        }, 10);
        
        searchInput.value = '';
        this.filterLanguages('');
        setTimeout(() => searchInput.focus(), 300);
    },

    hideDropdown() {
        const dropdown = document.querySelector('.language-dropdown');
        
        if (dropdown.classList.contains('active')) {
            dropdown.classList.add('hiding');
            dropdown.classList.remove('active');
            
            // Приховуємо після завершення анімації
            setTimeout(() => {
                dropdown.classList.remove('hiding');
                dropdown.style.display = 'none';
            }, 300);
        }
    },

    filterLanguages(searchTerm) {
        const buttons = document.querySelectorAll('.language-list button');
        const lowerSearchTerm = searchTerm.toLowerCase();
        
        buttons.forEach(button => {
            const text = button.textContent.toLowerCase();
            if (text.includes(lowerSearchTerm)) {
                button.classList.remove('hidden');
            } else {
                button.classList.add('hidden');
            }
        });
    },

    switchLanguage(lang) {
        if (!this.translations[lang]) return;
        
        this.currentLang = lang;
        this.applyTranslations();
        this.saveLanguage();
        this.highlightSelectedLanguage();
    },

    applyTranslations() {
        const t = this.translations[this.currentLang];
        
        // Оновлюємо всі тексти
        document.getElementById('text').placeholder = t.placeholder;
        document.querySelector('.language-btn').textContent = `🌐 ${t.language}`;
        document.querySelector('.language-search').placeholder = t.searchPlaceholder;
        
        const shareBtn = document.getElementById('shareToggleBtn');
        if (this.isCloseText(shareBtn.textContent)) {
            shareBtn.textContent = t.shareToggleClose;
        } else {
            shareBtn.textContent = t.shareToggle;
        }
        
        document.querySelector('.id-container label').textContent = t.yourId;
        document.querySelector('.connect-container label').textContent = t.connectFriend;
        document.getElementById('friendIdInput').placeholder = t.friendIdPlaceholder;
        
        // Оновлюємо тексти сповіщень
        document.getElementById('connectedIndicator').textContent = t.connected;
        document.getElementById('copiedIndicator').textContent = t.copied;
        document.getElementById('disconnectedIndicator').textContent = t.disconnected;
    },

    highlightSelectedLanguage() {
        // Видаляємо виділення з усіх кнопок
        document.querySelectorAll('.language-list button').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Додаємо виділення до обраної мови
        const selectedBtn = document.querySelector(`.language-list button[data-lang="${this.currentLang}"]`);
        if (selectedBtn) {
            selectedBtn.classList.add('selected');
        }
    },

    isCloseText(text) {
        const closeKeywords = [
            'Закрити', 'Close', 'Cerrar', 'Fermer', 'Schließen', 'Zamknij', 
            'Chiudi', 'Fechar', '閉じる', '닫기', '关闭', 'إغلاق', 'Закрыть',
            'Sluit', 'Stäng', 'Kapat', 'बंद करें', 'Затвори'
        ];
        return closeKeywords.some(keyword => text.includes(keyword));
    },

    saveLanguage() {
        localStorage.setItem('preferredLanguage', this.currentLang);
    },

    loadSavedLanguage() {
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && this.translations[savedLang]) {
            this.switchLanguage(savedLang);
        }
    }
};

// ==================== TODOLIST LOGIC ====================
let count = 1;
let list = document.getElementById("todolist");
let draggedItem = null;

// Функція для перемикання панелі спільного доступу - ВИПРАВЛЕНА
function initSharePanel() {
    const shareToggleBtn = document.getElementById('shareToggleBtn');
    const sharePanel = document.getElementById('sharePanel');
    
    shareToggleBtn.addEventListener('click', function() {
        const isOpening = !sharePanel.classList.contains('open');
        
        if (isOpening) {
            // Видаляємо клас закриття та додаємо відкриття
            sharePanel.classList.remove('closing', 'fade-out');
            sharePanel.classList.add('open');
        } else {
            // Додаємо анімацію закриття
            sharePanel.classList.add('closing');
            setTimeout(() => {
                sharePanel.classList.remove('open', 'closing');
            }, 300);
        }
        
        // Зміна тексту кнопки з урахуванням мови
        const t = languageManager.translations[languageManager.currentLang];
        if (isOpening) {
            shareToggleBtn.textContent = t.shareToggleClose;
        } else {
            shareToggleBtn.textContent = t.shareToggle;
        }
    });
    
    // Додатково: закриття при кліку поза панеллю
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.share-panel') && 
            !e.target.closest('#shareToggleBtn') && 
            sharePanel.classList.contains('open')) {
            
            // Анімація закриття
            sharePanel.classList.add('closing');
            setTimeout(() => {
                sharePanel.classList.remove('open', 'closing');
            }, 300);
            
            // Оновлення тексту кнопки
            const t = languageManager.translations[languageManager.currentLang];
            shareToggleBtn.textContent = t.shareToggle;
        }
    });
}
function saveTodos() {
    const todos = [];
    document.querySelectorAll("#todolist li").forEach(li => {
        const span = li.querySelector(".todo-content");
        todos.push({ id: li.id, text: span ? span.textContent : li.textContent });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(todo => {
        const li = createTodoElement(todo.text, todo.id);
        list.append(li);
        li.style.animation = "fadeIn 0.3s ease forwards";
    });
    if (todos.length > 0) count = Math.max(...todos.map(t => parseInt(t.id.replace('Item', '')) || 0)) + 1;
}

function createTodoElement(text, id = null) {
    const li = document.createElement("li");
    li.id = id || `Item${count}`;
    li.style.opacity = "0";
    li.style.animation = "fadeIn 0.3s ease forwards";

    const contentSpan = document.createElement("span");
    contentSpan.className = "todo-content";
    contentSpan.style.whiteSpace = "pre-wrap";
    contentSpan.textContent = text;

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.className = "edit-btn";
    editBtn.title = "Редагувати";

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "💾";
    saveBtn.className = "save-btn";
    saveBtn.title = "Зберегти";

    editBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        
        // Додаємо клас редагування для анімації
        li.classList.add('editing');
        
        const textarea = document.createElement("textarea");
        textarea.className = "edit-textarea";
        textarea.value = contentSpan.textContent;
        
        // Зберігаємо початкову висоту
        const startHeight = li.offsetHeight;
        
        li.innerHTML = "";
        li.append(textarea, saveBtn);
        
        // Фіксована висота - не змінюємо автоматично
        // textarea має фіксовану висоту зі скролом
        
        // Анімація зміни висоти li
        const endHeight = li.offsetHeight;
        li.style.height = startHeight + 'px';
        
        requestAnimationFrame(() => {
            li.style.transition = 'height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            li.style.height = endHeight + 'px';
        });

        textarea.focus();

        // Видаляємо автоматичну зміну висоти під час введення тексту
        // textarea залишається фіксованої висоти зі скролом

        textarea.addEventListener("keydown", (event) => {
            if(event.key === "Enter"){
                if(event.shiftKey){
                    // Додавання нового рядка при Shift+Enter
                    const pos = textarea.selectionStart;
                    const before = textarea.value.substring(0, pos);
                    const after = textarea.value.substring(pos);
                    textarea.value = before + "\n" + after;
                    textarea.selectionStart = textarea.selectionEnd = pos + 1;
                    event.preventDefault();
                    // Не оновлюємо висоту - залишаємо скрол
                } else {
                    // Збереження при Enter
                    event.preventDefault();
                    saveBtn.click();
                }
            } else if (event.key === "Escape") {
                // Відміна редагування при Escape
                cancelEdit();
            }
        });

        const cancelEdit = () => {
            // Додаємо клас закриття для textarea
            textarea.classList.add('closing');
            li.classList.remove('editing');
            li.classList.add('saving');
            
            const currentHeight = li.offsetHeight;
            li.style.height = currentHeight + 'px';
            
            requestAnimationFrame(() => {
                li.style.transition = 'height 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                li.style.height = startHeight + 'px';
                
                setTimeout(() => {
                    li.innerHTML = "";
                    li.append(contentSpan, editBtn);
                    li.style.height = '';
                    li.style.transition = '';
                    li.classList.remove('saving');
                }, 250);
            });
        };

        saveBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const newText = textarea.value.trim();
            if(newText !== ""){
                contentSpan.textContent = newText;
                
                // Додаємо клас закриття для textarea
                textarea.classList.add('closing');
                li.classList.remove('editing');
                li.classList.add('saving');
                
                const currentHeight = li.offsetHeight;
                li.style.height = currentHeight + 'px';
                
                requestAnimationFrame(() => {
                    li.style.transition = 'height 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    li.style.height = startHeight + 'px';
                    
                    setTimeout(() => {
                        li.innerHTML = "";
                        li.append(contentSpan, editBtn);
                        li.style.height = '';
                        li.style.transition = '';
                        li.classList.remove('saving');
                        saveTodos();
                        peerManager.sendTodos();
                    }, 250);
                });
            } else {
                textarea.focus();
            }
        });
    });

    li.append(contentSpan, editBtn);

    // ============ ОНОВЛЕНИЙ ОБРОБНИК КЛІКУ ДЛЯ ВИДАЛЕННЯ ВПРАВО ============
    li.addEventListener("click", (e) => {
        if(e.target.tagName !== "BUTTON" && !li.querySelector("textarea")){
            // Додаємо ефект перекреслення
            const contentSpan = li.querySelector('.todo-content');
            contentSpan.classList.add('completed');
            contentSpan.style.animation = 'strikeThrough 0.3s ease forwards';
            
            // Додаємо анімацію видалення вправо
            li.classList.add('deleting');
            
            setTimeout(() => {
                li.remove();
                saveTodos();
                peerManager.sendTodos();
            }, 500);
        }
    });

    li.draggable = true;
    li.addEventListener("dragstart", (e) => {
        draggedItem = e.target;
        e.target.classList.add("dragging");
    });

    li.addEventListener("dragend", (e) => {
        e.target.classList.remove("dragging");
        draggedItem = null;
        saveTodos();
        peerManager.sendTodos();
    });

    return li;
}

function add() {
    const textarea = document.getElementById("text");
    const text = textarea.value.trim();
    if(text !== ""){
        const li = createTodoElement(text);
        list.append(li);
        count++;
        saveTodos();
        peerManager.sendTodos();
    }
    textarea.value = "";
    textarea.focus();
}

const textareaInput = document.getElementById("text");
textareaInput.addEventListener("keydown", function(e) {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if(e.key === "Enter"){
        if(isMobile){
            const pos = this.selectionStart;
            const before = this.value.substring(0, pos);
            const after = this.value.substring(pos);
            this.value = before + "\n" + after;
            this.selectionStart = this.selectionEnd = pos + 1;
            e.preventDefault();
        } else {
            if(e.shiftKey){
                const pos = this.selectionStart;
                const before = this.value.substring(0, pos);
                const after = this.value.substring(pos);
                this.value = before + "\n" + after;
                this.selectionStart = this.selectionEnd = pos + 1;
                e.preventDefault();
            } else {
                e.preventDefault();
                add();
            }
        }
    }
});

list.addEventListener("dragover", (e) => {
    e.preventDefault();
    const closest = e.target.closest("li");
    if(!closest || closest === draggedItem) return;
    const rect = closest.getBoundingClientRect();
    const offset = e.clientY - rect.top;
    if(offset > rect.height / 2) closest.after(draggedItem);
    else closest.before(draggedItem);
});

// ==================== IMPROVED PEERJS MANAGER ====================
const peerManager = {
    peer: null,
    conn: null,
    
    init() {
        // Спочатку показуємо "Завантаження..."
        document.getElementById("myPeerId").textContent = "Завантаження...";
        
        // Генеруємо або отримуємо збережений ID
        const savedPeerId = this.getSavedPeerId();
        
        console.log('Initializing Peer with ID:', savedPeerId || 'auto-generated');
        
        // Використовуємо збережений ID або генеруємо новий
        this.peer = new Peer(savedPeerId, {
            debug: 2
        });
        
        this.peer.on('open', (id) => {
            console.log('My peer ID is: ' + id);
            document.getElementById("myPeerId").textContent = id;
            this.savePeerId(id); // Зберігаємо ID
            this.updateConnectionButtons(false);
        });
        
        this.peer.on('connection', (connection) => {
            console.log('Incoming connection from: ' + connection.peer);
            this.conn = connection;
            this.setupConnection();
        });
        
        this.peer.on('error', (err) => {
            console.error('Peer error:', err);
            
            // Якщо помилка через зайнятий ID, генеруємо новий
            if (err.type === 'unavailable-id') {
                console.log('ID вже зайнятий, генеруємо новий...');
                localStorage.removeItem('peerId'); // Видаляємо старий ID
                this.init(); // Переініціалізуємо з новим ID
            } else {
                document.getElementById("myPeerId").textContent = "Помилка: " + err.message;
                this.updateConnectionButtons(false);
            }
        });
        
        // Setup UI events
        document.getElementById("connectBtn").onclick = () => this.connectToFriend();
        document.getElementById("disconnectBtn").onclick = () => this.disconnect();
        document.getElementById("copyIdBtn").onclick = () => this.copyMyId();
    },
    
    // Отримати збережений Peer ID
    getSavedPeerId() {
        return localStorage.getItem('peerId');
    },
    
    // Зберегти Peer ID
    savePeerId(id) {
        localStorage.setItem('peerId', id);
    },
    
    connectToFriend() {
        const friendId = document.getElementById("friendIdInput").value.trim();
        if (!friendId) {
            alert("Введіть ID друга");
            return;
        }
        
        console.log('Connecting to: ' + friendId);
        this.updateConnectionButtons(true);
        
        try {
            this.conn = this.peer.connect(friendId, {
                reliable: true
            });
            this.setupConnection();
        } catch (error) {
            console.error('Connection failed:', error);
            alert('Помилка підключення: ' + error.message);
            this.updateConnectionButtons(false);
        }
    },
    
    disconnect() {
        if (this.conn) {
            this.conn.close();
            this.conn = null;
        }
        this.updateConnectionButtons(false);
        this.showDisconnectedIndicator();
    },
    
    setupConnection() {
        if (!this.conn) return;
        
        this.conn.on('open', () => {
            console.log('Connection established with: ' + this.conn.peer);
            this.updateConnectionButtons(true);
            this.showConnectedIndicator();
            this.sendTodos();
        });
        
        this.conn.on('data', (data) => {
            console.log('Received data:', data);
            this.applyRemoteTodos(data);
        });
        
        this.conn.on('close', () => {
            console.log('Connection closed');
            this.updateConnectionButtons(false);
            this.showDisconnectedIndicator();
        });
        
        this.conn.on('error', (err) => {
            console.error('Connection error:', err);
            this.updateConnectionButtons(false);
            alert('Помилка зʼєднання: ' + err.message);
        });
    },
    
    updateConnectionButtons(isConnected) {
        const connectBtn = document.getElementById("connectBtn");
        const disconnectBtn = document.getElementById("disconnectBtn");
        const friendInput = document.getElementById("friendIdInput");
        
        if (isConnected) {
            connectBtn.disabled = true;
            disconnectBtn.disabled = false;
            friendInput.disabled = true;
        } else {
            connectBtn.disabled = false;
            disconnectBtn.disabled = true;
            friendInput.disabled = false;
        }
    },
    
    sendTodos() {
        if (this.conn && this.conn.open) {
            const todos = JSON.parse(localStorage.getItem("todos")) || [];
            console.log('Sending todos:', todos);
            this.conn.send(todos);
        }
    },
    
    applyRemoteTodos(todos) {
        console.log('Applying remote todos:', todos);
        list.innerHTML = "";
        todos.forEach(todo => {
            const li = createTodoElement(todo.text, todo.id);
            list.append(li);
        });
        localStorage.setItem("todos", JSON.stringify(todos));
        
        // Update count
        if (todos.length > 0) {
            count = Math.max(...todos.map(t => parseInt(t.id.replace('Item', '')) || 0)) + 1;
        }
    },
    
    copyMyId() {
        const myId = document.getElementById("myPeerId").textContent;
        if (myId === "Завантаження..." || myId.startsWith("Помилка:")) {
            alert("ID ще не завантажено або сталася помилка");
            return;
        }
        
        navigator.clipboard.writeText(myId).then(() => {
            this.showCopiedIndicator();
        }).catch(err => {
            console.error('Copy failed:', err);
            // Fallback для старих браузерів
            const textArea = document.createElement("textarea");
            textArea.value = myId;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showCopiedIndicator();
        });
    },
    
    showCopiedIndicator() {
        const ind = document.getElementById("copiedIndicator");
        ind.style.top = "20px";
        ind.style.opacity = "1";
        setTimeout(() => {
            ind.style.top = "-50px";
            ind.style.opacity = "0";
        }, 2000);
    },
    
    showConnectedIndicator() {
        const ind = document.getElementById("connectedIndicator");
        ind.style.top = "20px";
        ind.style.opacity = "1";
        setTimeout(() => {
            ind.style.top = "-50px";
            ind.style.opacity = "0";
        }, 3000);
    },
    
    showDisconnectedIndicator() {
        const ind = document.getElementById("disconnectedIndicator");
        ind.style.top = "20px";
        ind.style.opacity = "1";
        setTimeout(() => {
            ind.style.top = "-50px";
            ind.style.opacity = "0";
        }, 2000);
    }
};

// Initialize everything when page loads
window.addEventListener("load", function() {
    loadTodos();
    initSharePanel(); // Ініціалізація панелі спільного доступу
    languageManager.init(); // Ініціалізація менеджера мов
    peerManager.init(); // Ініціалізація PeerJS
});
