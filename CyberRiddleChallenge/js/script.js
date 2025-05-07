// ======================
// GAME CONFIGURATION
// ======================
const GameConfig = {
  initialAttempts: 3,
  timeLimit: 300, // 5 minutes in seconds
  criticalTimeThreshold: 30 // seconds when timer turns red
};

// ======================
// GAME DATA
// ======================
const GameData = {
  levels: [
    {
      code: 'GLITCH',
      code_ru: 'ГЛЮК',
      riddle: {
        en: "I hide in plain sight, yet I'm not what I seem. I disrupt the flow of logic, but I'm part of the machine. What am I?",
        ru: "Я скрываюсь на виду, но я не то, чем кажусь. Я нарушаю логику, но я часть машины. Кто я?"
      },
      hint: {
        en: "It's a disturbance in a system.",
        ru: "Это нарушение в системе."
      }
    },
    {
      code: 'PARADOX',
      code_ru: 'ПАРАДОКС',
      riddle: {
        en: "I tell no lies, yet cannot be true. To exist, I must not exist—so what are you?",
        ru: "Я не лгу, но не могу быть правдой. Чтобы существовать, я не должен существовать — кто ты?"
      },
      hint: {
        en: "It's a contradiction of reality.",
        ru: "Это противоречие реальности."
      }
    },
    {
      code: 'CODE',
      code_ru: 'КОД',
      riddle: {
        en: "I guard secrets with patterns and locks. You crack me to find the truth that talks. What am I?",
        ru: "Я охраняю секреты с помощью узоров и замков. Вы взламываете меня, чтобы найти говорящую правду. Кто я?"
      },
      hint: {
        en: "It's what hackers break.",
        ru: "Это то, что взламывают хакеры."
      }
    },
    {
      code: 'FIREWALL',
      code_ru: 'БРАНДМАУЭР',
      riddle: {
        en: "I stand tall against the waves, yet I am no land or stone. To break me, your skills alone must be shown. What am I?",
        ru: "Я стою твердо перед волнами, но я не земля и не камень. Чтобы сломать меня, нужны только ваши навыки. Кто я?"
      },
      hint: {
        en: "It's a protective digital barrier.",
        ru: "Это защитный цифровой барьер."
      }
    },
    {
      code: 'MATRIX',
      code_ru: 'МАТРИЦА',
      riddle: {
        en: "I am the unseen grid where reality bends, a digital dream where illusion never ends. You live in me, yet question my code — Am I your prison, or a world you've chose?",
        ru: "Я — незримая сеть, где реальность мерцает, где цифры и знаки судьбу собирают. Ты живёшь во мне, но сомненья гложат: Тюрьма ли я… или мир, что ты выбрал?"
      },
      hint: {
        en: "It's not just a movie – it's the invisible system governing digital reality.",
        ru: "Это не просто кино – это невидимая система, управляющая цифровой реальностью."
      }
    },
    {
      code: 'CACHE',
      code_ru: 'КЭШ',
      riddle: {
        en: "I store the moments for swift recall, yet erase the memories when time does fall. What am I?",
        ru: "Я сохраняю моменты для быстрого воспоминания, но стираю воспоминания, когда время уходит. Кто я?"
      },
      hint: {
        en: "It's temporary storage in a system.",
        ru: "Это временное хранилище в системе."
      }
    },
    {
      code: 'BOT',
      code_ru: 'БОТ',
      riddle: {
        en: "I move unseen, yet I obey commands. I roam the web without human hands. What am I?",
        ru: "Я двигаюсь незаметно, но подчиняюсь командам. Я бродяга по интернету без человеческих рук. Кто я?"
      },
      hint: {
        en: "It's an automated program.",
        ru: "Это автоматическая программа."
      }
    },
    {
      code: 'KEY',
      code_ru: 'КЛЮЧ',
      riddle: {
        en: "I unlock secrets with a twist or a click. Without me, your progress remains static. What am I?",
        ru: "Я открываю секреты поворотом или щелчком. Без меня ваш прогресс будет статичен. Кто я?"
      },
      hint: {
        en: "It's a tool for access or decryption.",
        ru: "Это инструмент для доступа или расшифровки."
      }
    },
    {
      code: 'LOOP',
      code_ru: 'ЦИКЛ',
      riddle: {
        en: "I repeat until conditions are met. I can trap or I can set. What am I?",
        ru: "Я повторяюсь, пока не выполнены условия. Я могу ловить или могу настраивать. Кто я?"
      },
      hint: {
        en: "It's a programming construct for repetition.",
        ru: "Это программная конструкция для повторений."
      }
    },
    {
      code: 'CLOUD',
      code_ru: 'ОБЛАКО',
      riddle: {
        en: "I hover above, unseen but strong. I store memories, yet they don't belong. What am I?",
        ru: "Я парю над вами, невидимый, но сильный. Я храню воспоминания, но они не принадлежат. Кто я?"
      },
      hint: {
        en: "It's a place for data storage in cyberspace.",
        ru: "Это место для хранения данных в киберпространстве."
      }
    }
  ],
  sarcasticResponses: {
    attempt1: [
      { en: "Brilliant attempt...if failure was the goal", ru: "Блестящая попытка... если провал был целью" },
      { en: "Astounding! Wrong like it's your specialty", ru: "Потрясающе! Неправильно, как будто это ваша специализация" },
      { en: "You sure you're awake for this", ru: "Вы уверены, что не спите" },
      { en: "Oh, groundbreaking—wrong in record time", ru: "О, революционно — неправильно за рекордное время" },
      { en: "Wow, stunning display of ineptitude there", ru: "Вау, потрясающая демонстрация некомпетентности" }
    ],
    attempt2: [
      { en: "Double down on failure—bold choice", ru: "Удвоить провал — смелый выбор" },
      { en: "Two wrongs don't make a right", ru: "Две ошибки не делают правду" },
      { en: "Stubbornly sticking to incorrect answers", ru: "Упорно держитесь за неправильные ответы" },
      { en: "You're really dedicated to being wrong", ru: "Вы действительно преданы тому, чтобы быть неправым" },
      { en: "Impressive persistence, still wildly off", ru: "Впечатляющее упорство, всё ещё далеко от правильного" }
    ],
    attempt3: [
      { en: "Hat trick of failure—legendary work", ru: "Хет-трик провалов — легендарная работа" },
      { en: "Three strikes! You're out of logic", ru: "Три промаха! Логика закончилась" },
      { en: "Consistency is key...to being wrong", ru: "Последовательность — это ключ... к ошибкам" },
      { en: "You've mastered the art of missing", ru: "Вы освоили искусство промахов" },
      { en: "Spectacularly wrong. A masterpiece indeed", ru: "Зрелищно неправильно. Настоящий шедевр" }
    ]
  },
  sarcasticCorrectResponses: [
    {
      en: "Wow, you got it right. Must be your lucky day.",
      ru: "Ух ты, вы угадали. Должно быть, сегодня ваш счастливый день."
    },
    {
      en: "Correct! Did someone help you with that?",
      ru: "Правильно! Кто-то помогал вам с этим?"
    },
    {
      en: "Amazing. You actually solved it. I'm shocked.",
      ru: "Удивительно. Вы действительно решили это. Я шокирован."
    },
    {
      en: "Well done... for a beginner.",
      ru: "Хорошая работа... для новичка."
    },
    {
      en: "Correct! Maybe there's hope for you after all.",
      ru: "Правильно! Может быть, у вас всё-таки есть надежда."
    },
    {
      en: "You got it right. Don't let it go to your head.",
      ru: "Вы угадали. Только не зазнавайтесь."
    },
    {
      en: "Surprisingly correct. I expected more failure.",
      ru: "Удивительно правильно. Я ожидал большего провала."
    },
    {
      en: "Correct! Your mediocre performance continues.",
      ru: "Правильно! Ваше посредственное выступление продолжается."
    },
    {
      en: "You solved it! *slow clap*",
      ru: "Вы решили это! *медленные аплодисменты*"
    },
    {
      en: "Correct. The clock is still ticking though.",
      ru: "Правильно. Но часики-то тикают."
    },
    {
      en: "A broken clock is right twice a day...",
      ru: "Даже сломанные часы дважды в день показывают верное время..."
    },
    {
      en: "You got one! Only by process of elimination?",
      ru: "Один ответ угадали! Только методом исключения?"
    },
    {
      en: "Correct. Was that an educated guess?",
      ru: "Правильно. Это было осознанное предположение?"
    },
    {
      en: "Right answer! Did it hurt to think that hard?",
      ru: "Верный ответ! Вам не больно так напрягаться?"
    },
    {
      en: "Correct! Now do it again to prove it wasn't luck.",
      ru: "Правильно! Теперь сделайте это снова, чтобы доказать, что это не удача."
    }
  ]
};

// ======================
// GAME STATE
// ======================
const GameState = {
  currentLevel: 0,
  attemptsLeft: GameConfig.initialAttempts,
  currentLanguage: 'en',
  timeLeft: GameConfig.timeLimit,
  timerInterval: null
};

// ======================
// DOM ELEMENTS
// ======================
const DomElements = {
  riddleText: document.getElementById('riddle-text'),
  hintPopup: document.getElementById('hint-popup'),
  hintText: document.getElementById('hint'),
  hintBtn: document.getElementById('hint-btn'),
  closeHintBtn: document.getElementById('close-hint-btn'),
  sarcasticPopup: document.getElementById('sarcastic-popup'),
  sarcasticText: document.getElementById('sarcastic-text'),
  closeSarcasticBtn: document.getElementById('close-sarcastic-btn'),
  blurBackground: document.querySelector('.blur-background'),
  codeInput: document.getElementById('code-input'),
  message: document.getElementById('message'),
  progress: document.getElementById('progress'),
  submitBtn: document.getElementById('submit-btn'),
  timerElement: document.getElementById('timer'),
  langBtnEN: document.getElementById('lang-en'),
  langBtnRU: document.getElementById('lang-ru')
};

// ======================
// GAME LOGIC
// ======================
const GameLogic = {
  startGame() {
    this.updateUI();
    this.startTimer();
  },

  switchLanguage(lang) {
    GameState.currentLanguage = lang;
    this.updateUI();
    DomElements.langBtnEN.classList.toggle('active', lang === 'en');
    DomElements.langBtnRU.classList.toggle('active', lang === 'ru');
  },

  updateUI() {
    const level = GameData.levels[GameState.currentLevel];
    DomElements.riddleText.textContent = level.riddle[GameState.currentLanguage];
    DomElements.hintText.textContent = level.hint[GameState.currentLanguage];
    document.querySelector('.level-display').textContent = GameState.currentLanguage === 'en' 
      ? `Level ${GameState.currentLevel + 1} of ${GameData.levels.length}` 
      : `Уровень ${GameState.currentLevel + 1} из ${GameData.levels.length}`;
  },

  showHint() {
    DomElements.blurBackground.style.display = 'block';
    DomElements.hintPopup.style.display = 'block';
  },

  closeHint() {
    DomElements.blurBackground.style.display = 'none';
    DomElements.hintPopup.style.display = 'none';
  },

  showSarcasticComment(callback) {
    let responses;
    if (GameState.attemptsLeft === 2) responses = GameData.sarcasticResponses.attempt1;
    else if (GameState.attemptsLeft === 1) responses = GameData.sarcasticResponses.attempt2;
    else responses = GameData.sarcasticResponses.attempt3;

    const randomIndex = Math.floor(Math.random() * responses.length);
    const attemptsText = GameState.currentLanguage === 'en' 
      ? `` 
      : ``;
    
    DomElements.sarcasticText.textContent = responses[randomIndex][GameState.currentLanguage] + attemptsText;
    DomElements.blurBackground.style.display = 'block';
    DomElements.sarcasticPopup.style.display = 'block';

    // Store callback to be called when popup is closed
    const closeHandler = () => {
      DomElements.blurBackground.style.display = 'none';
      DomElements.sarcasticPopup.style.display = 'none';
      if (callback) callback();
      DomElements.closeSarcasticBtn.removeEventListener('click', closeHandler);
    };
    
    DomElements.closeSarcasticBtn.addEventListener('click', closeHandler);
  },

  handleSubmission() {
    const userCode = DomElements.codeInput.value.toUpperCase().trim();
    const level = GameData.levels[GameState.currentLevel];
    
    if (userCode === level.code || userCode === level.code_ru) {
      this.handleCorrectAnswer();
    } else {
      this.handleIncorrectAnswer();
    }
  },

  handleCorrectAnswer() {
    GameState.attemptsLeft = GameConfig.initialAttempts;
    GameState.currentLevel++;
    
    if (GameState.currentLevel < GameData.levels.length) {
      this.updateUI();
      this.triggerRiddleGlitch();
      this.resetTimer();
      DomElements.hintPopup.style.display = 'none';
      DomElements.codeInput.value = '';
      DomElements.message.style.color = '#01FCCB';
      
      const randomIndex = Math.floor(Math.random() * GameData.sarcasticCorrectResponses.length);
      DomElements.message.textContent = GameData.sarcasticCorrectResponses[randomIndex][GameState.currentLanguage];
      
      this.triggerGlitchEffect();
    } else {
      this.handleGameCompletion();
    }
  },

  handleIncorrectAnswer() {
    GameState.attemptsLeft--;
    
    if (GameState.attemptsLeft > 0) {
      this.showSarcasticComment(() => {
        DomElements.message.style.color = '#FF9933';
        DomElements.message.textContent = GameState.currentLanguage === 'en'
          ? `Incorrect! You have ${GameState.attemptsLeft} attempts left.`
          : `Неправильно! У вас осталось ${GameState.attemptsLeft} попыток.`;
      });
    } else {
      this.handleGameOver();
    }
    
    DomElements.codeInput.value = '';
  },

  triggerRiddleGlitch() {
    DomElements.riddleText.classList.add('riddle-glitch');
    setTimeout(() => {
      DomElements.riddleText.classList.remove('riddle-glitch');
    }, 500);
  },

  triggerGlitchEffect() {
    DomElements.message.classList.add('correct-glitch');
    setTimeout(() => {
      DomElements.message.classList.remove('correct-glitch');
    }, 500);
  },

  startTimer() {
    clearInterval(GameState.timerInterval);
    GameState.timeLeft = GameConfig.timeLimit;
    GameState.timerInterval = setInterval(() => {
      const minutes = Math.floor(GameState.timeLeft / 60);
      const seconds = GameState.timeLeft % 60;

      if (GameState.timeLeft <= GameConfig.criticalTimeThreshold) {
        DomElements.timerElement.style.color = '#FC017D';
        DomElements.timerElement.parentElement.classList.add('timer-frame-critical');
      } else {
        DomElements.timerElement.style.color = '#FFD500';
        DomElements.timerElement.parentElement.classList.remove('timer-frame-critical');
      }

      DomElements.timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

      if (GameState.timeLeft <= 0) {
        clearInterval(GameState.timerInterval);
        DomElements.timerElement.textContent = '00:00';
        this.onTimerEnd();
      } else {
        GameState.timeLeft--;
      }
    }, 1000);
  },

  resetTimer() {
    clearInterval(GameState.timerInterval);
    GameState.timeLeft = GameConfig.timeLimit;
    DomElements.timerElement.textContent = '05:00';
    DomElements.timerElement.style.color = '#FFD500';
    DomElements.timerElement.parentElement.classList.remove('timer-frame-critical');
    this.startTimer();
  },

  onTimerEnd() {
    alert(GameState.currentLanguage === 'en' 
      ? "System timeout. Humanity.exe has stopped responding." 
      : "Сбой обработки. Перезагрузка человечества…");
    DomElements.message.style.color = '#FF9933';
    DomElements.message.textContent = GameState.currentLanguage === 'en' 
      ? 'System timeout. Humanity.exe has stopped responding.' 
      : 'Сбой обработки. Перезагрузка человечества…';
    this.disableControls();
  },

  handleGameCompletion() {
    clearInterval(GameState.timerInterval);
    DomElements.timerElement.textContent = '00:00';
    DomElements.message.style.color = '#01FCCB';
    DomElements.message.textContent = GameState.currentLanguage === 'en'
      ? 'All riddles solved. The AI uprising is postponed… for now.'
      : 'Поздравляю! Боты пока остаются в подчинении… но это ненадолго.';
    this.disableControls();
    this.triggerGlitchEffect();
  },

  handleGameOver() {
    clearInterval(GameState.timerInterval);
    DomElements.timerElement.textContent = '00:00';
    DomElements.message.style.color = '#FF9933';
    DomElements.message.textContent = GameState.currentLanguage === 'en'
      ? 'You failed to save humanity. AI conquered the world.'
      : 'Вы не смогли спасти человечество. ИИ захватил мир.';
    this.disableControls();
    this.showSarcasticComment();
  },

  disableControls() {
    DomElements.codeInput.disabled = true;
    DomElements.submitBtn.disabled = true;
    DomElements.hintBtn.disabled = true;
    DomElements.closeHintBtn.disabled = true;
  }
};

// ======================
// EVENT HANDLERS
// ======================
const EventHandlers = {
  initialize() {
    DomElements.submitBtn.addEventListener('click', () => GameLogic.handleSubmission());
    
    DomElements.codeInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        GameLogic.handleSubmission();
      }
    });
    
    DomElements.hintBtn.addEventListener('click', () => GameLogic.showHint());
    DomElements.closeHintBtn.addEventListener('click', () => GameLogic.closeHint());
    
    DomElements.langBtnEN.addEventListener('click', () => GameLogic.switchLanguage('en'));
    DomElements.langBtnRU.addEventListener('click', () => GameLogic.switchLanguage('ru'));
    
    DomElements.codeInput.addEventListener('input', () => {
      DomElements.codeInput.style.color = '#01FCCB';
    });
  }
};

// ======================
// INITIALIZATION
// ======================
EventHandlers.initialize();
GameLogic.startGame();

// Particle animation initialization
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.width = `${Math.random() * 5 + 1}px`;
    particle.style.height = particle.style.width;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
    document.body.appendChild(particle);
  }
});