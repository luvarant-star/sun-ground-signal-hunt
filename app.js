(() => {
  const translations = {
    ru: {
      'Anteprima: i follow sono confermati dall’utente e salvati solo in questo browser. Nessuna password o email viene raccolta.':'Предварительная версия: подписку подтверждает сам пользователь; отметка хранится только в этом браузере. Пароль и адрес почты не запрашиваются.',
      'Anteprima: non è un vero accesso Google. Per pubblicarlo serve collegare OAuth.':'Предварительная версия: это не настоящий вход через Google. Перед публикацией нужно настроить OAuth.',
      'Apri Instagram ↗':'Открыть Instagram ↗','ASCOLTA EXOTIC AUTOMATIC · PLAYER SPOTIFY':'СЛУШАТЬ EXOTIC AUTOMATIC · SPOTIFY',
      'Ascolta il segnale':'Слушать сигнал','TIMBRO':'ТЕМБР','Scegli il colore del synth':'Выбери тембр синтезатора','Vetro':'Стекло','Ottone':'Латунь','Digitale':'Цифровой','IL TUO NOME SUL SEGNALE':'ТВОЁ ИМЯ НА СИГНАЛЕ','Scarica la tua firma':'Скачать свой звуковой знак','Resta sul tuo dispositivo e sull’immagine che crei.':'Остаётся на устройстве и в созданном изображении.','Ascolta.<br><span>Ricostruisci.</span>':'Слушай.<br><span>Повтори сигнал.</span>',
      'SEGNO SONORO ·':'ЗВУКОВОЙ ЗНАК ·','Salva il segno':'Сохранить звуковой знак','Salva la tua card':'Сохранить карточку','Cerca il profilo Sun Ground, seguilo e torna qui per attivare il pass.':'Найди профиль Sun Ground, подпишись и вернись сюда, чтобы активировать пропуск.',
      'CHI C’È DIETRO IL SEGNALE':'КТО СОЗДАЛ ЭТОТ СИГНАЛ','Completa le missioni, decifra i segnali e passa il segnale a qualcun altro.':'Выполняй миссии, расшифровывай сигналы и передавай их дальше.',
      'Condividi la missione ↗':'Поделиться миссией ↗','Continua con Google · anteprima':'Продолжить с Google · демо',
      'Entra nell’universo di Exotic Automatic: un viaggio elettronico tra luoghi lontani, ritmi ipnotici e macchine imprevedibili. Ascolta una sequenza, ripeti il segnale e sblocca tutte le 10 trasmissioni. La caccia comincia dalla traccia 7.':'Добро пожаловать во вселенную Exotic Automatic: электронное путешествие по далёким мирам, гипнотическим ритмам и непредсказуемым машинам. Запомни последовательность, повтори сигнал и открой 10 передач. Охота начинается с трека 7.',
      'Entra nella Signal Hunt':'Войти в Signal Hunt','Entra nella<br><span>trasmissione.</span>':'Войди в<br><span>передачу.</span>',
      'Gratis · progressi salvati sul tuo dispositivo · nessun account richiesto':'Бесплатно · прогресс хранится на устройстве · аккаунт не нужен',
      'GRATUITO · FAN PASS':'БЕСПЛАТНО · FAN PASS','Hai trovato<br><span>il passaggio.</span>':'Ты нашёл<br><span>переход.</span>',
      'Ho seguito · continua':'Я подписался · продолжить','HOME':'ДОМОЙ',
      'Il gioco ricrea un segnale con toni sintetici. Il player ufficiale è solo nella home.':'Игра воссоздаёт сигналы синтезаторными тонами. Официальный плеер находится только на главной.',
      'Il progetto elettronico di Antonio Luvarà si muove tra IDM, psichedelia, sperimentazione e pulsazioni da dancefloor. Exotic Automatic cerca una fuga dal rumore quotidiano, tra paesaggi immaginati, automazione e il desiderio di riprendere il controllo. Ora quel mondo diventa un gioco: ogni livello è un segnale da ricordare e ricostruire.':'Электронный проект Antonio Luvarà соединяет IDM, психоделию, эксперименты и энергию танцпола. Exotic Automatic ищет выход из повседневного шума — среди воображаемых пейзажей, автоматизации и желания вернуть контроль. Теперь этот мир стал игрой: каждый уровень — сигнал, который нужно запомнить и восстановить.',
      'Memorizza il segnale, poi ripetilo toccando i pad nello stesso ordine. Ogni missione aggiunge un frammento.':'Запомни сигнал и повтори его, нажимая на пэды в том же порядке. Каждая миссия добавляет новый фрагмент.',
      'Perditi.<br><span>Ritrova il segnale.</span>':'Потеряйся.<br><span>Найди сигнал.</span>',
      'Prossima trasmissione':'Следующая передача','Prova il percorso Google e salva un Fan Pass dimostrativo in questo browser.':'Попробуй вход через Google и сохрани демо Fan Pass в этом браузере.',
      'RICOMPENSA SBLOCCATA ·':'НАГРАДА ОТКРЫТА ·','Salva il segno':'Сохранить звуковой знак',
      'Scegli come sostenere Sun Ground e attiva il Fan Pass: un badge fan sul tuo profilo locale e accesso a tutte le missioni.':'Поддержи Sun Ground и активируй бесплатный Fan Pass — значок фаната и доступ ко всем миссиям прямо в этом браузере.',
      'Segui Sun Ground e torna qui per attivare il pass.':'Подпишись на Sun Ground и вернись сюда, чтобы активировать пропуск.',
      'SEQUENZA SONORA':'ЗВУКОВАЯ ПОСЛЕДОВАТЕЛЬНОСТЬ','SIGNAL HUNT':'ОХОТА ЗА СИГНАЛОМ',
      'SUN GROUND FAN PASS':'FAN PASS SUN GROUND','Tocca “Ascolta il segnale” per iniziare':'Нажми «Слушать сигнал», чтобы начать',
      'Toni sintetici · sequenza del livello':'Синтезаторные тона · последовательность уровня',
      'Torna alla home':'На главную','TRACCIA DELLA MISSIONE':'ТРЕК МИССИИ',
      'TRASMISSIONE DECIFRATA':'ПЕРЕДАЧА РАСШИФРОВАНА','TRASMISSIONI DECIFRATE':'РАСШИФРОВАНО ПЕРЕДАЧ',
      'Trova Sun Ground su Spotify ↗':'Найти Sun Ground в Spotify ↗','UN GIOCO SONORO DI SUN GROUND':'ЗВУКОВАЯ ИГРА SUN GROUND',
      'UN SEGNALE ALLA VOLTA':'ПО ОДНОМУ СИГНАЛУ','Segui il profilo Sun Ground e torna qui per attivare il pass.':'Подпишись на профиль Sun Ground и вернись, чтобы активировать пропуск.',
      'Apri Spotify ↗':'Открыть Spotify ↗','Accedi con Google per salvare il Fan Pass su più dispositivi.':'Войди через Google, чтобы сохранить Fan Pass на разных устройствах.',
      'Continua con Google':'Продолжить с Google','Accesso Google da collegare al sito pubblicato.':'Для сайта нужно подключить вход через Google.',
      'Installa sul telefono':'Установить на телефон','Entra nella Signal Hunt':'Войти в Signal Hunt',
      'Toni sintetici · sequenza del livello':'Синтезаторные тона · последовательность уровня'
    },
    ja: {
      'Anteprima: i follow sono confermati dall’utente e salvati solo in questo browser. Nessuna password o email viene raccolta.':'プレビュー：フォローは本人による申告で、このブラウザーにのみ保存されます。パスワードやメールアドレスは収集しません。',
      'Anteprima: non è un vero accesso Google. Per pubblicarlo serve collegare OAuth.':'プレビュー：Googleへの実際のログインではありません。公開にはOAuthの設定が必要です。',
      'Apri Instagram ↗':'Instagramを開く ↗','ASCOLTA EXOTIC AUTOMATIC · PLAYER SPOTIFY':'EXOTIC AUTOMATICを聴く · SPOTIFY',
      'Ascolta il segnale':'シグナルを聴く','TIMBRO':'シンセ音色','Scegli il colore del synth':'シンセの音色を選ぶ','Vetro':'グラス','Ottone':'ブラス','Digitale':'デジタル','IL TUO NOME SUL SEGNALE':'シグナルに残す名前','Scarica la tua firma':'自分のサウンドアートを保存','Resta sul tuo dispositivo e sull’immagine che crei.':'名前はこの端末と作成した画像にのみ保存されます。','Ascolta.<br><span>Ricostruisci.</span>':'聴いて。<br><span>再現しよう。</span>',
      'SEGNO SONORO ·':'サウンドマーク ·','Salva il segno':'サウンドマークを保存','Salva la tua card':'カードを保存','Cerca il profilo Sun Ground, seguilo e torna qui per attivare il pass.':'Sun Groundのプロフィールを見つけてフォローし、ここに戻ってパスを有効にしてください。',
      'CHI C’È DIETRO IL SEGNALE':'シグナルの向こうにいるのは','Completa le missioni, decifra i segnali e passa il segnale a qualcun altro.':'ミッションをクリアしてシグナルを解読し、誰かに伝えよう。',
      'Condividi la missione ↗':'ミッションをシェア ↗','Continua con Google · anteprima':'Googleで続ける · プレビュー',
      'Entra nell’universo di Exotic Automatic: un viaggio elettronico tra luoghi lontani, ritmi ipnotici e macchine imprevedibili. Ascolta una sequenza, ripeti il segnale e sblocca tutte le 10 trasmissioni. La caccia comincia dalla traccia 7.':'Exotic Automaticの世界へ。遠い場所、催眠的なリズム、予測できない機械を巡る電子音楽の旅。音の並びを聴いてシグナルを再現し、10の通信をすべて解放しよう。追跡は7曲目から始まる。',
      'Entra nella Signal Hunt':'Signal Huntを始める','Entra nella<br><span>trasmissione.</span>':'シグナルに<br><span>アクセス。</span>',
      'Gratis · progressi salvati sul tuo dispositivo · nessun account richiesto':'無料 · 進行状況は端末に保存 · アカウント不要',
      'GRATUITO · FAN PASS':'無料 · FAN PASS','Hai trovato<br><span>il passaggio.</span>':'道を見つけた。<br><span>次へ進もう。</span>',
      'Ho seguito · continua':'フォローしました · 続ける','HOME':'ホーム',
      'Il gioco ricrea un segnale con toni sintetici. Il player ufficiale è solo nella home.':'ゲーム内のシグナルはシンセ音で再現されます。公式プレイヤーはホームにのみあります。',
      'Il progetto elettronico di Antonio Luvarà si muove tra IDM, psichedelia, sperimentazione e pulsazioni da dancefloor. Exotic Automatic cerca una fuga dal rumore quotidiano, tra paesaggi immaginati, automazione e il desiderio di riprendere il controllo. Ora quel mondo diventa un gioco: ogni livello è un segnale da ricordare e ricostruire.':'Antonio Luvaràのエレクトロニック・プロジェクトは、IDM、サイケデリア、実験性、ダンスフロアの鼓動を横断する。Exotic Automaticは、想像上の風景や自動化、制御を取り戻す願いを通して、日常のノイズからの逃避を探る。その世界がゲームになった。各レベルは記憶して再構築するシグナルだ。',
      'Memorizza il segnale, poi ripetilo toccando i pad nello stesso ordine. Ogni missione aggiunge un frammento.':'シグナルを覚え、同じ順番でパッドをタップして再現しよう。ミッションごとに音が増えていく。',
      'Perditi.<br><span>Ritrova il segnale.</span>':'迷い込もう。<br><span>シグナルを探せ。</span>',
      'Prossima trasmissione':'次のシグナルへ','Prova il percorso Google e salva un Fan Pass dimostrativo in questo browser.':'Googleルートを試して、このブラウザーにデモ版Fan Passを保存。',
      'RICOMPENSA SBLOCCATA ·':'リワード解除 ·','Salva il segno':'サウンドマークを保存',
      'Scegli come sostenere Sun Ground e attiva il Fan Pass: un badge fan sul tuo profilo locale e accesso a tutte le missioni.':'Sun Groundを応援して無料のFan Passを有効にしよう。このブラウザーでファンバッジを保存して、すべてのミッションにアクセスできます。',
      'Segui Sun Ground e torna qui per attivare il pass.':'Sun Groundをフォローし、ここに戻ってパスを有効にしてください。',
      'SEQUENZA SONORA':'サウンドシーケンス','SIGNAL HUNT':'シグナルハント',
      'SUN GROUND FAN PASS':'SUN GROUND FAN PASS','Tocca “Ascolta il segnale” per iniziare':'「シグナルを聴く」をタップして開始',
      'Toni sintetici · sequenza del livello':'シンセ音 · レベルのシーケンス',
      'Torna alla home':'ホームに戻る','TRACCIA DELLA MISSIONE':'ミッションの曲',
      'TRASMISSIONE DECIFRATA':'シグナル解読','TRASMISSIONI DECIFRATE':'解読したシグナル',
      'Trova Sun Ground su Spotify ↗':'SpotifyでSun Groundを探す ↗','UN GIOCO SONORO DI SUN GROUND':'SUN GROUNDのサウンドゲーム',
      'UN SEGNALE ALLA VOLTA':'ひとつずつシグナルを','Segui il profilo Sun Ground e torna qui per attivare il pass.':'Sun Groundのプロフィールをフォローし、戻ってパスを有効にしてください。',
      'Apri Spotify ↗':'Spotifyを開く ↗','Accedi con Google per salvare il Fan Pass su più dispositivi。':'Googleでログインして、複数の端末でFan Passを使おう。',
      'Continua con Google':'Googleで続ける','Accesso Google da collegare al sito pubblicato.':'公開サイトではGoogleログインの連携が必要です。',
      'Installa sul telefono':'スマートフォンにインストール','Entra nella Signal Hunt':'Signal Huntを始める'
    }
  };
  const featureTranslations = {
    ru: {
      'SCEGLI UNA MODALITÀ':'ВЫБЕРИ РЕЖИМ','Scegli il tuo<br><span>modo di gioco.</span>':'Выбери свой<br><span>режим игры.</span>',
      'Tre modi per decifrare ogni missione. La traccia resta la stessa: cambia il modo in cui la ricostruisci.':'Три способа пройти каждую миссию. Трек тот же, меняется испытание.',
      'TRACCIA SELEZIONATA':'ВЫБРАННЫЙ ТРЕК','01 / MEMORIA':'01 / ПАМЯТЬ','Ritmo drum pad':'Ритм на драм-пэдах','02 / RITMO':'02 / РИТМ','03 / MELODIA':'03 / МЕЛОДИЯ',
      'Segnale in memoria':'Память сигнала','Memorizza i quattro suoni e ripeti la sequenza nello stesso ordine.':'Запомни четыре звука и повтори последовательность в том же порядке.',
      'Ascolta otto colpi e tocca i pad sul tempo, seguendo la pulsazione.':'Послушай восемь ударов и играй на пэдах в ритм.',
      'Ricostruzione melodia':'Восстановление мелодии','Ascolta un frammento synth ispirato alla traccia e rimetti le note nel giusto ordine.':'Послушай синтезаторный мотив по мотивам трека и расставь ноты в правильном порядке.',
      'Scegli questo modo ↗':'Выбрать режим ↗','Puoi cambiare modalità a ogni missione.':'Режим можно менять в каждой миссии.',
      'NOTE DA RIORDINARE':'НОТЫ ДЛЯ ПОРЯДКА','LA TUA MELODIA':'ТВОЯ МЕЛОДИЯ',
      'Tocca le note nell’ordine in cui le hai ascoltate. Puoi rimuoverle per correggere la sequenza.':'Нажимай на ноты в услышанном порядке. Нажми на ноту в ответе, чтобы убрать её.',
      'Svuota la sequenza':'Очистить последовательность','Scegli tra memoria, ritmo con drum pad e ricostruzione melodica. Completa le 10 missioni a partire dalla traccia 7.':'Выбери память, ритм на драм-пэдах или восстановление мелодии. Пройди 10 миссий, начиная с трека 7.','Suoni synth generati nel browser; i motivi sono ispirati alle tracce.':'Синтезаторные звуки создаются в браузере; мотивы вдохновлены треками.'
    },
    ja: {
      'SCEGLI UNA MODALITÀ':'モードを選択','Scegli il tuo<br><span>modo di gioco.</span>':'<span>ゲームモード</span><br>を選ぼう。',
      'Tre modi per decifrare ogni missione. La traccia resta la stessa: cambia il modo in cui la ricostruisci.':'ミッションごとに3つの遊び方。曲はそのまま、挑戦のしかたを選べます。',
      'TRACCIA SELEZIONATA':'選択中のトラック','01 / MEMORIA':'01 / メモリー','Ritmo drum pad':'ドラムパッドのリズム','02 / RITMO':'02 / リズム','03 / MELODIA':'03 / メロディー',
      'Segnale in memoria':'シグナルメモリー','Memorizza i quattro suoni e ripeti la sequenza nello stesso ordine.':'4つの音を覚えて、同じ順番で再現しよう。',
      'Ascolta otto colpi e tocca i pad sul tempo, seguendo la pulsazione.':'8つのビートを聴いて、リズムに合わせてパッドを叩こう。',
      'Ricostruzione melodia':'メロディー再構築','Ascolta un frammento synth ispirato alla traccia e rimetti le note nel giusto ordine.':'トラックに着想を得たシンセフレーズを聴いて、音を正しい順番に並べよう。',
      'Scegli questo modo ↗':'このモードを選ぶ ↗','Puoi cambiare modalità a ogni missione.':'ミッションごとにモードを選べます。',
      'NOTE DA RIORDINARE':'並べ替える音','LA TUA MELODIA':'あなたのメロディー',
      'Tocca le note nell’ordine in cui le hai ascoltate. Puoi rimuoverle per correggere la sequenza.':'聴いた順番に音をタップ。選んだ音をタップすると取り消せます。',
      'Svuota la sequenza':'並びを消去','Scegli tra memoria, ritmo con drum pad e ricostruzione melodica. Completa le 10 missioni a partire dalla traccia 7.':'メモリー、ドラムパッドのリズム、メロディー再構築から選ぼう。トラック7から全10ミッションに挑戦。','Suoni synth generati nel browser; i motivi sono ispirati alle tracce.':'ブラウザーで生成したシンセ音です。メロディーは楽曲に着想を得ています。'
    }
  };
  const tracks = [
    {n:7,title:'Nrkey my love'}, {n:8,title:'A sea without shore'}, {n:9,title:'Epitaph of the sun'},
    {n:10,title:'Unknown 37'}, {n:1,title:'Exotic-automatic'}, {n:2,title:'Echoes and devotions'},
    {n:3,title:'Two in orbit'}, {n:4,title:'Neverbornevil'}, {n:5,title:'Wicked signal'}, {n:6,title:'Infamous beach'}
  ];
  const patterns = [[0,2,1,3],[1,3,0,2,1],[2,0,3,1,2,3],[3,1,2,0,1,3],[0,3,2,1,0,2,3],[1,0,2,3,1,2,0,3],[2,3,1,0,3,2,1,0],[3,2,0,1,2,0,3,1,2],[0,1,3,2,0,3,1,2,3,0],[1,2,0,3,2,1,3,0,2,1,0]];
  const rhythmPatterns = [
    {bpm:96,pads:[0,2,1,0,3,2,1,0]}, {bpm:104,pads:[0,1,2,0,3,1,2,0]},
    {bpm:108,pads:[0,2,0,1,3,2,1,0]}, {bpm:100,pads:[0,1,3,2,0,1,2,3]},
    {bpm:112,pads:[0,2,1,3,0,2,1,0]}, {bpm:118,pads:[0,1,2,3,0,2,1,3]},
    {bpm:92,pads:[0,3,1,2,0,2,3,1]}, {bpm:102,pads:[0,2,1,0,3,1,2,3]},
    {bpm:106,pads:[0,1,2,0,3,2,1,3]}, {bpm:110,pads:[0,2,3,1,0,2,1,3]}
  ];
  const melodies = [
    [0,3,5,4,2,1], [0,4,7,5,3], [2,5,7,4,3,1], [1,4,6,5,2], [0,3,6,7,4,2],
    [2,4,7,5,3], [0,2,5,7,6,3], [1,4,5,8,6], [0,3,5,7,4,1], [2,4,6,8,5,3]
  ];
  const melodyNotes = ['C4','D4','E4','G4','A4','C5','D5','E5','G5'];
  const storageKey = 'sun-ground-signal-hunt-v3';
  const $ = id => document.getElementById(id);
  const screens = {home:$('home-screen'), fan:$('fan-screen'), mode:$('mode-screen'), game:$('game-screen'), result:$('result-screen')};
  let state = {completed:[]}, level = 0, inputIndex = 0, busy = false, audio = null, spotifyController = null, deferredInstallPrompt = null, toastTimer, language = 'en', rewardCover = null, rewardCoverFailed = false, rewardReady = false, gameMode = 'memory', rhythmAttempt = null, rhythmTimer = null, melodyAnswer = [], melodyOrder = [];
  try { state = {...state, ...JSON.parse(localStorage.getItem(storageKey) || '{}')}; } catch {}
  state.completed = Array.isArray(state.completed) ? state.completed.filter(n => Number.isInteger(n) && n >= 0 && n < tracks.length) : [];
  const save = () => { try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch {} };
  const completedCount = () => new Set(state.completed).size;
  const nextLevel = () => { for (let i=0;i<tracks.length;i++) if (!state.completed.includes(i)) return i; return tracks.length-1; };
  function updateContinueButton(){const replay=completedCount()>=tracks.length,nextTrack=tracks[replay?0:nextLevel()];$('continue-button').hidden=false;$('continue-button').querySelector('span').textContent=replay?say('Ricomincia dal livello 1','Replay from level 1','Начать с первого уровня','最初のレベルから再開'):say(`Continua · traccia ${nextTrack.n}`,`Continue · track ${nextTrack.n}`,`Далее · трек ${nextTrack.n}`,`次へ · トラック${nextTrack.n}`);}
  function show(name) { Object.entries(screens).forEach(([key,el]) => { el.hidden = key !== name; }); window.scrollTo({top:0,behavior:'smooth'}); }
  function say(it,en,ru,ja){return ({it,en,ru,ja})[language]||en;}
  function setLanguage(lang) {
    language = ['it','en','ru','ja'].includes(lang) ? lang : 'en';
    document.documentElement.lang = language;
    document.querySelectorAll('[data-it][data-en]').forEach(el => {
      const key = el.dataset.it;
      const val = language === 'it' ? key : language === 'en' ? el.dataset.en : (featureTranslations[language]?.[key] || translations[language]?.[key] || el.dataset.en);
      if (val.includes('<')) el.innerHTML = val; else el.textContent = val;
    });
    $('language-toggle').value = language;
    $('language-toggle').setAttribute('aria-label', say('Lingua','Language','Язык','言語'));
    $('player-name-input').placeholder = say('IL TUO NOME','YOUR NAME','ТВОЁ ИМЯ','あなたの名前');
    document.title = say('Sun Ground — Exotic Automatic / Signal Hunt','Sun Ground — Exotic Automatic / Signal Hunt','Sun Ground — Exotic Automatic / Охота за сигналом','Sun Ground — Exotic Automatic / シグナルハント');
    const description = {it:'Sun Ground: gioco gratuito di sequenze sonore ispirato a Exotic Automatic.',en:'Sun Ground: a free sound sequence game inspired by Exotic Automatic.',ru:'Sun Ground: бесплатная игра на память звуковых последовательностей по мотивам Exotic Automatic.',ja:'Sun Ground：Exotic Automaticに着想を得た無料のサウンドシーケンスゲーム。'};
    document.querySelector('meta[name=description]').content = description[language];
    const coverAlt = say('Copertina ufficiale di Exotic Automatic di Sun Ground','Official cover artwork for Exotic Automatic by Sun Ground','Официальная обложка альбома Exotic Automatic проекта Sun Ground','Sun Ground「Exotic Automatic」の公式アルバムカバー');
    document.querySelector('.cover-art').alt = coverAlt;
    drawProgress(); updateFanBadge(); updateTimbrePicker(); updateContinueButton(); updateModeScreen(); updateGameModeUI();
    try { localStorage.setItem('sun-ground-language-v4', language); } catch {}
  }
  function drawProgress() { const count=completedCount(); $('progress-count').textContent=`${count} / 10`; for (const id of ['home-progress','game-progress']) { const el=$(id); el.innerHTML=''; for(let i=0;i<10;i++){const node=document.createElement('i');node.className='progress-node'+(state.completed.includes(i)?' is-done':'');el.append(node);} } }
  function updateFanBadge(){const badge=$('fan-pass-badge');if(!state.fanAccess){badge.hidden=true;return;}badge.hidden=false;const method=state.fanAccess==='google-preview'?say('GOOGLE · ANTEPRIMA','GOOGLE · PREVIEW','GOOGLE · ДЕМО','GOOGLE · プレビュー'):state.fanAccess.toUpperCase();badge.textContent=say(`✦ FAN PASS ATTIVO · ${method}`,`✦ FAN PASS ACTIVE · ${method}`,`✦ FAN PASS АКТИВЕН · ${method}`,`✦ FAN PASS 有効 · ${method}`);}
  function currentTrack(){return tracks[level];}
  function currentSequence(){return gameMode === 'rhythm' ? rhythmPatterns[level].pads : gameMode === 'melody' ? melodies[level] : patterns[level];}
  function updateLevel() {
    const t = currentTrack(), n = String(t.n).padStart(2,'0'), mission = String(level + 1).padStart(2,'0');
    $('level-number').textContent = say('TRACCIA ' + n + ' · MISSIONE ' + mission,'TRACK ' + n + ' · MISSION ' + mission,'ТРЕК ' + n + ' · МИССИЯ ' + mission,'トラック ' + n + ' · ミッション ' + mission);
    $('level-count').textContent = mission + ' / 10'; $('track-name').textContent = t.title;
    $('input-status').classList.remove('is-error','is-success');
    $('input-status').textContent = say('Tocca “Ascolta il segnale” per iniziare','Tap “Listen to the signal” to begin','Нажми «Слушать сигнал», чтобы начать','「シグナルを聴く」をタップして開始');
    drawProgress();
  }
  function updateTimbrePicker(){document.querySelectorAll('[data-timbre]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.timbre===(state.timbre||'glass'))));}
  function tone(pad,duration=.22){try{audio ||= new (window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')audio.resume();const now=audio.currentTime,hz=[261.63,293.66,329.63,392,440,523.25,587.33,659.25,783.99][pad],preset=state.timbre||'glass',master=audio.createGain(),filter=audio.createBiquadFilter(),pan=audio.createStereoPanner();filter.type=preset==='glass'?'bandpass':preset==='brass'?'lowpass':'highpass';filter.frequency.setValueAtTime(preset==='glass'?Math.min(7200,hz*4):preset==='brass'?2300:4400,now);filter.frequency.exponentialRampToValueAtTime(preset==='brass'?1150:preset==='digital'?1900:Math.min(3600,hz*2.4),now+Math.max(.08,duration));filter.Q.value=preset==='glass'?1.8:.72;pan.pan.value=[-.52,-.18,.18,.52,0,.18,-.18,.36,-.36][pad];master.gain.setValueAtTime(.0001,now);master.gain.exponentialRampToValueAtTime(.22,now+.012);const tail=preset==='glass'?.34:preset==='brass'?.2:.08;master.gain.exponentialRampToValueAtTime(.0001,now+duration+tail);filter.connect(pan);pan.connect(master);master.connect(audio.destination);const add=(type,freq,detune,volume,pitchDrop=0)=>{const osc=audio.createOscillator(),gain=audio.createGain();osc.type=type;osc.frequency.setValueAtTime(freq,now);if(pitchDrop)osc.frequency.exponentialRampToValueAtTime(freq*pitchDrop,now+.075);osc.detune.value=detune;gain.gain.value=volume;osc.connect(gain);gain.connect(filter);osc.start(now);osc.stop(now+duration+tail+.03);};if(preset==='glass'){add('sine',hz,0,.68);add('sine',hz*2.76,3,.22);add('triangle',hz*4.04,-2,.09);}else if(preset==='brass'){add('sawtooth',hz,-8,.26);add('sawtooth',hz,8,.23);add('triangle',hz*2,0,.14);add('sine',hz/2,0,.14);}else{filter.frequency.setValueAtTime(5400,now);filter.frequency.exponentialRampToValueAtTime(950,now+.09);add('square',hz*1.5,0,.24,.67);add('square',hz,0,.16);add('sine',hz/2,0,.2);} }catch{}}
  const sleep=ms=>new Promise(r=>setTimeout(r,ms));
  function updateModeScreen() {
    if (!$("mode-screen")) return;
    const track = currentTrack();
    $('mode-track-name').textContent = track.title;
    $('mode-mission-number').textContent = String(level + 1).padStart(2,'0') + ' / 10';
    $('mode-options').setAttribute('aria-label', say('Modalità di gioco','Game modes','Режимы игры','ゲームモード'));
  }
  function updateGameModeUI() {
    const isRhythm = gameMode === 'rhythm', isMelody = gameMode === 'melody';
    let label, title, copy, listen, subtitle;
    if (gameMode === 'memory') {
      label = say('SEGNALE IN MEMORIA','SIGNAL MEMORY','ПАМЯТЬ СИГНАЛА','シグナルメモリー');
      title = say('Ascolta.<br><span>Ricostruisci.</span>','Listen.<br><span>Rebuild it.</span>','Слушай.<br><span>Повтори.</span>','聴いて。<br><span>再現しよう。</span>');
      copy = say('Memorizza il segnale, poi ripetilo toccando i pad nello stesso ordine. Ogni missione aggiunge un frammento.','Memorize the signal, then repeat it by tapping the pads in the same order. Every mission adds a fragment.','Запомни сигнал и повтори его, нажимая на пэды в том же порядке. Каждая миссия добавляет новый фрагмент.','シグナルを覚え、同じ順番でパッドをタップして再現しよう。ミッションごとに音が増えていく。');
      listen = say('Ascolta il segnale','Listen to the signal','Слушать сигнал','シグナルを聴く');
      subtitle = say('Toni sintetici · sequenza del livello','Synth tones · level sequence','Синтезаторные тона · последовательность уровня','シンセ音 · レベルのシーケンス');
    } else if (isRhythm) {
      label = say('DRUM PAD · RITMO','DRUM PAD · RHYTHM','DRUM PAD · РИТМ','ドラムパッド · リズム');
      title = say('Senti il<br><span>battito.</span>','Feel the<br><span>rhythm.</span>','Поймай<br><span>ритм.</span>','ビートを<br><span>感じよう。</span>');
      copy = say('Ascolta il pattern, poi tocca i pad a tempo. Ogni colpo deve cadere sul battito giusto.','Listen to the pattern, then tap the pads in time. Land each hit on the beat.','Послушай ритм и играй на пэдах в такт. Каждый удар должен попасть в нужный момент.','リズムを聴き、ビートに合わせてパッドを叩こう。');
      listen = say('Ascolta il pattern','Listen to the rhythm','Слушать ритм','リズムを聴く');
      const bpm = rhythmPatterns[level].bpm;
      subtitle = say('8 COLPI · ' + bpm + ' BPM','8 HITS · ' + bpm + ' BPM','8 УДАРОВ · ' + bpm + ' BPM','8ビート · ' + bpm + ' BPM');
    } else {
      label = say('MELODIA · RICOSTRUZIONE','MELODY · REBUILD','МЕЛОДИЯ · СБОРКА','メロディー · 再構築');
      title = say('Ascolta.<br><span>Rimetti in ordine.</span>','Hear it.<br><span>Put it back.</span>','Слушай.<br><span>Собери мелодию.</span>','聴いて。<br><span>並べ直そう。</span>');
      copy = say('Ascolta il motivo synth ispirato a “' + currentTrack().title + '”, poi riordina le note per ricostruirlo.','Hear a synth phrase inspired by “' + currentTrack().title + '”, then reorder the notes to rebuild it.','Послушай синтезаторный мотив по мотивам «' + currentTrack().title + '», затем расставь ноты в правильном порядке.','「' + currentTrack().title + '」に着想を得たシンセフレーズを聴いて、音を並べ直そう。');
      listen = say('Ascolta la melodia','Hear the melody','Слушать мелодию','メロディーを聴く');
      subtitle = say('Motivo synth · ispirato alla traccia','Synth motif · inspired by the track','Синтезаторный мотив · по мотивам трека','シンセフレーズ · トラックに着想');
    }
    $('game-mode-label').textContent = label; $('game-title').innerHTML = title; $('game-copy').textContent = copy;
    $('module-label').textContent = say('SEQUENZA SONORA','SOUND SEQUENCE','ЗВУКОВАЯ ПОСЛЕДОВАТЕЛЬНОСТЬ','サウンドシーケンス');
    $('listen-title').textContent = listen; $('listen-subtitle').textContent = subtitle;
    $('timbre-head').hidden = isRhythm; $('timbre-picker').hidden = isRhythm; $('tone-grid').hidden = isMelody;
    $('rhythm-meter').hidden = !isRhythm; $('melody-puzzle').hidden = !isMelody;
    $('listen-button').disabled = busy || Boolean(rhythmAttempt);
    const padLabels = isRhythm ? [say('Cassa','Kick drum','Бочка','キック'),say('Rullante','Snare drum','Малый барабан','スネア'),say('Hi-hat','Hi-hat','Хай-хэт','ハイハット'),say('Tom','Tom drum','Том','タム')] : [say('Pad 1','Pad 1','Пэд 1','パッド 1'),say('Pad 2','Pad 2','Пэд 2','パッド 2'),say('Pad 3','Pad 3','Пэд 3','パッド 3'),say('Pad 4','Pad 4','Пэд 4','パッド 4')];
    document.querySelectorAll('.tone-pad').forEach((button,index) => { button.setAttribute('aria-label', padLabels[index]); button.disabled = busy; });
    $('rhythm-meter').setAttribute('aria-label', say('Pattern ritmico di otto battiti','Eight beat rhythm pattern','Ритмический рисунок из восьми ударов','8ビートのリズムパターン'));
    $('melody-bank').setAttribute('aria-label', say('Note da riordinare','Notes to reorder','Ноты для перестановки','並べ替える音'));
    $('melody-answer').setAttribute('aria-label', say('La tua melodia','Your melody','Твоя мелодия','あなたのメロディー'));
    if (isRhythm) renderRhythmMeter(-1, rhythmAttempt ? rhythmAttempt.step : 0);
    if (isMelody && melodyOrder.length) renderMelodyPuzzle();
    if (!busy && !rhythmAttempt) {
      $('input-status').classList.remove('is-error','is-success');
      $('input-status').textContent = gameMode === 'memory' ? say('Tocca “Ascolta il segnale” per iniziare','Tap “Listen to the signal” to begin','Нажми «Слушать сигнал», чтобы начать','「シグナルを聴く」をタップして開始') : gameMode === 'rhythm' ? say('Ascolta il pattern per iniziare','Listen to the rhythm to begin','Послушай ритм, чтобы начать','リズムを聴いて始めよう') : say('Tocca “Ascolta la melodia” per iniziare','Tap “Hear the melody” to begin','Нажми «Слушать мелодию», чтобы начать','「メロディーを聴く」をタップして開始');
    }
  }
  function renderRhythmMeter(activeIndex, doneCount) {
    const meter = $('rhythm-meter');
    if (meter.childElementCount !== 8) {
      meter.innerHTML = '';
      for (let i = 0; i < 8; i++) { const step = document.createElement('i'); step.textContent = String(i + 1).padStart(2,'0'); meter.appendChild(step); }
    }
    Array.from(meter.children).forEach((step,index) => { step.classList.toggle('is-active', index === activeIndex); step.classList.toggle('is-done', index < doneCount); });
  }
  function clearRhythmTimer() { if (rhythmTimer) clearInterval(rhythmTimer); rhythmTimer = null; }
  function cleanupGame() { clearRhythmTimer(); rhythmAttempt = null; busy = false; }
  function startRhythmAttempt(beatMs) {
    const firstBeatAt = performance.now() + beatMs * 2;
    rhythmAttempt = {beatMs,firstBeatAt,step:0,tolerance:Math.min(230,beatMs * .34)};
    $('listen-button').disabled = true; renderRhythmMeter(-1,0);
    clearRhythmTimer();
    rhythmTimer = setInterval(() => {
      if (!rhythmAttempt || busy) return;
      const now = performance.now(), remaining = rhythmAttempt.firstBeatAt - now;
      if (remaining > 0) { const count = Math.ceil(remaining / rhythmAttempt.beatMs); const text = say('Preparati · '+count,'Get ready · '+count,'Приготовься · '+count,'準備 · '+count); if ($('input-status').textContent !== text) $('input-status').textContent = text; return; }
      const target = rhythmAttempt.firstBeatAt + rhythmAttempt.step * rhythmAttempt.beatMs;
      if (now > target + rhythmAttempt.tolerance) { failRhythm('missed'); return; }
      const active = Math.min(rhythmAttempt.step,7); renderRhythmMeter(active,rhythmAttempt.step);
      const text = say('Tocca sul battito · colpo '+(rhythmAttempt.step+1)+' di 8','Tap on the beat · hit '+(rhythmAttempt.step+1)+' of 8','Попади в ритм · удар '+(rhythmAttempt.step+1)+' из 8','ビートに合わせてタップ · '+(rhythmAttempt.step+1)+' / 8');
      if ($('input-status').textContent !== text) $('input-status').textContent = text;
    },35);
  }
  function failRhythm(reason) {
    clearRhythmTimer(); rhythmAttempt = null; busy = false;
    $('listen-button').disabled = false; document.querySelectorAll('.tone-pad').forEach(button => button.disabled = false);
    $('input-status').classList.remove('is-success'); $('input-status').classList.add('is-error');
    $('input-status').textContent = reason === 'wrong' ? say('Pad sbagliato · riascolta e riprova','Wrong pad · replay and try again','Неверный пэд · послушай и попробуй ещё раз','パッドが違うよ · もう一度聴こう') : reason === 'early' ? say('Aspetta il battito successivo','Wait for the next beat','Подожди следующего удара','次のビートを待ってね') : say('Battito perso · riascolta e riprova','Beat missed · replay and try again','Ритм сбился · послушай и попробуй ещё раз','ビートを逃したよ · もう一度聴こう');
    renderRhythmMeter(-1,0);
  }
  function playDrum(pad) {
    try {
      audio ||= new (window.AudioContext || window.webkitAudioContext)(); if (audio.state === 'suspended') audio.resume();
      const now = audio.currentTime, master = audio.createGain(); master.gain.setValueAtTime(1,now); master.connect(audio.destination);
      const noise = (cutoff,volume,decay) => {
        const length = Math.floor(audio.sampleRate * decay), buffer = audio.createBuffer(1,length,audio.sampleRate), data = buffer.getChannelData(0);
        for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
        const source = audio.createBufferSource(), filter = audio.createBiquadFilter(), gain = audio.createGain();
        source.buffer = buffer; filter.type = 'highpass'; filter.frequency.setValueAtTime(cutoff,now);
        gain.gain.setValueAtTime(volume,now); gain.gain.exponentialRampToValueAtTime(.0001,now+decay);
        source.connect(filter); filter.connect(gain); gain.connect(master); source.start(now); source.stop(now+decay);
      };
      if (pad === 0 || pad === 3) {
        const osc = audio.createOscillator(), gain = audio.createGain(); osc.type = pad === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(pad === 0 ? 145 : 210,now); osc.frequency.exponentialRampToValueAtTime(pad === 0 ? 48 : 92,now+.16);
        gain.gain.setValueAtTime(pad === 0 ? .72 : .42,now); gain.gain.exponentialRampToValueAtTime(.0001,now+.22);
        osc.connect(gain); gain.connect(master); osc.start(now); osc.stop(now+.23);
      } else if (pad === 1) { noise(1200,.44,.18); const osc = audio.createOscillator(), gain = audio.createGain();
        osc.type = 'triangle'; osc.frequency.setValueAtTime(190,now); gain.gain.setValueAtTime(.2,now); gain.gain.exponentialRampToValueAtTime(.0001,now+.11);
        osc.connect(gain); gain.connect(master); osc.start(now); osc.stop(now+.12);
      } else noise(6200,.28,.075);
    } catch {}
  }
  async function flashDrumPad(pad,duration) {
    const button = document.querySelector('.tone-pad[data-pad="' + pad + '"]');
    if (button) button.classList.add('is-active'); playDrum(pad); await sleep(duration); if (button) button.classList.remove('is-active');
  }
  async function playRhythm() {
    if (busy) return;
    clearRhythmTimer(); rhythmAttempt = null; busy = true;
    const rhythm = rhythmPatterns[level], beatMs = 60000 / rhythm.bpm, pads = document.querySelectorAll('.tone-pad');
    $('listen-button').disabled = true; pads.forEach(button => button.disabled = true); $('listen-button').classList.add('is-playing');
    $('input-status').classList.remove('is-error','is-success'); $('input-status').textContent = say('Ascolta il pattern e preparati','Listen to the pattern, then get ready','Послушай ритм и приготовься','リズムを聴いて準備しよう');
    const firstHitAt = performance.now() + 260;
    for (let i = 0; i < rhythm.pads.length; i++) {
      const wait = firstHitAt + i * beatMs - performance.now(); if (wait > 0) await sleep(wait);
      await flashDrumPad(rhythm.pads[i],Math.min(155,beatMs*.27)); renderRhythmMeter(i,i);
    }
    busy = false; pads.forEach(button => button.disabled = false); $('listen-button').classList.remove('is-playing');
    startRhythmAttempt(beatMs);
  }
  async function pressRhythmPad(pad) {
    const attempt = rhythmAttempt; if (!attempt || busy) return;
    const target = attempt.firstBeatAt + attempt.step * attempt.beatMs, delta = performance.now() - target;
    if (delta < -attempt.tolerance) { $('input-status').textContent = say('Troppo presto · aspetta il battito','Too early · wait for the beat','Слишком рано · дождись удара','早すぎるよ · ビートを待ってね'); return; }
    if (delta > attempt.tolerance) { failRhythm('missed'); return; }
    busy = true; await flashDrumPad(pad,120); busy = false;
    if (pad !== rhythmPatterns[level].pads[attempt.step]) { failRhythm('wrong'); return; }
    attempt.step++; renderRhythmMeter(-1,attempt.step);
    if (attempt.step === rhythmPatterns[level].pads.length) {
      clearRhythmTimer(); rhythmAttempt = null; $('listen-button').disabled = false;
      $('input-status').classList.remove('is-error'); $('input-status').classList.add('is-success'); $('input-status').textContent = say('Ritmo agganciato · frammento sbloccato','Beat locked · fragment unlocked','Ритм пойман · фрагмент открыт','リズム受信 · フラグメント解放');
      completeLevel(); return;
    }
    $('input-status').textContent = say('Giusto · continua sul tempo','On beat · keep going','Верно · продолжай в ритм','その調子 · 続けてね');
  }
  function getMelodyOrder() {
    const length = melodies[level].length, values = Array.from({length},(_,index) => index), shift = (level % (length - 1)) + 1;
    const rotated = values.slice(shift).concat(values.slice(0,shift)); return level % 2 === 0 ? rotated.reverse() : rotated;
  }
  function renderMelodyPuzzle() {
    const bank = $('melody-bank'), answer = $('melody-answer'); if (!bank || !answer) return;
    bank.innerHTML = ''; answer.innerHTML = ''; const used = new Set(melodyAnswer);
    melodyOrder.forEach(step => {
      if (used.has(step)) return;
      const note = melodies[level][step], button = document.createElement('button');
      button.type = 'button'; button.className = 'melody-note'; button.dataset.step = String(step); button.dataset.pitch = String(note); button.textContent = melodyNotes[note]; button.disabled = busy;
      button.setAttribute('aria-label',say('Riproduci la nota '+melodyNotes[note],'Play note '+melodyNotes[note],'Сыграть ноту '+melodyNotes[note],'音 '+melodyNotes[note]+' を鳴らす'));
      button.addEventListener('click',() => selectMelodyNote(step)); bank.appendChild(button);
    });
    if (!melodyAnswer.length) { const empty = document.createElement('p'); empty.className = 'melody-empty'; empty.textContent = say('Tocca le note per comporre la risposta','Tap notes to build your answer','Нажимай на ноты, чтобы собрать ответ','音をタップしてメロディーを作ろう'); answer.appendChild(empty); }
    melodyAnswer.forEach((step,index) => {
      const note = melodies[level][step], button = document.createElement('button');
      button.type = 'button'; button.className = 'melody-note'; button.dataset.pitch = String(note); button.textContent = melodyNotes[note]; button.disabled = busy;
      button.setAttribute('aria-label',say('Rimuovi la nota '+melodyNotes[note],'Remove note '+melodyNotes[note],'Убрать ноту '+melodyNotes[note],'音 '+melodyNotes[note]+' を外す'));
      button.addEventListener('click',() => removeMelodyNote(index)); answer.appendChild(button);
    });
  }
  function selectMelodyNote(step) {
    if (busy || melodyAnswer.includes(step)) return;
    const note = melodies[level][step]; tone(note,.24); melodyAnswer.push(step); renderMelodyPuzzle();
    if (melodyAnswer.length === melodies[level].length) {
      if (melodyAnswer.every((selected,index) => selected === index)) {
        busy = true; $('input-status').classList.remove('is-error'); $('input-status').classList.add('is-success'); $('input-status').textContent = say('Melodia ricostruita · frammento sbloccato','Melody rebuilt · fragment unlocked','Мелодия собрана · фрагмент открыт','メロディー再構築 · フラグメント解放');
        setTimeout(completeLevel,420);
      } else {
        $('input-status').classList.remove('is-success'); $('input-status').classList.add('is-error'); $('input-status').textContent = say('Note fuori ordine · rimuovi e riprova','Notes out of order · remove one and try again','Ноты перепутаны · убери ноту и попробуй ещё раз','順番が違うよ · 音を外してやり直そう');
      }
    } else {
      $('input-status').classList.remove('is-error','is-success'); $('input-status').textContent = say('Nota aggiunta · continua a riordinare','Note added · keep arranging','Нота добавлена · продолжай сборку','音を追加 · 続けて並べよう');
    }
  }
  function removeMelodyNote(index) { if (busy) return; melodyAnswer.splice(index,1); renderMelodyPuzzle(); $('input-status').classList.remove('is-error','is-success'); $('input-status').textContent = say('Nota rimossa · sistema l’ordine','Note removed · adjust the order','Нота убрана · измени порядок','音を外したよ · 並べ直そう'); }
  function resetMelody() { if (busy) return; melodyAnswer = []; renderMelodyPuzzle(); $('input-status').classList.remove('is-error','is-success'); $('input-status').textContent = say('Sequenza svuotata · ascolta e riordina','Order cleared · listen and arrange','Ответ очищен · послушай и собери снова','並びを消去 · 聴いて並べ直そう'); }
  async function flashMelodyNote(note,duration) {
    document.querySelectorAll('.melody-note').forEach(button => { if (Number(button.dataset.pitch) === note) button.classList.add('is-active'); });
    tone(note,duration/1000); await sleep(duration);
    document.querySelectorAll('.melody-note').forEach(button => button.classList.remove('is-active'));
  }
  async function playMelody() {
    if (busy) return; busy = true; $('listen-button').disabled = true; $('listen-button').classList.add('is-playing');
    $('input-status').classList.remove('is-error','is-success'); $('input-status').textContent = say('Ascolta le note della traccia','Listen to the track-inspired notes','Послушай ноты по мотивам трека','トラックに着想を得た音を聴こう');
    renderMelodyPuzzle(); const notes = melodies[level], startAt = performance.now() + 220;
    for (let i = 0; i < notes.length; i++) { const wait = startAt + i * 410 - performance.now(); if (wait > 0) await sleep(wait); await flashMelodyNote(notes[i],270); }
    busy = false; $('listen-button').disabled = false; $('listen-button').classList.remove('is-playing'); renderMelodyPuzzle();
    $('input-status').textContent = say('Ora riordina le note ascoltate','Now reorder the notes you heard','Теперь расставь услышанные ноты','聴いた音を順番に並べよう');
  }
  function completeLevel() {
    if (!state.completed.includes(level)) state.completed = [...state.completed,level];
    save(); drawProgress(); showReward();
  }
  function continueToNextLevel() {
    if (!state.completed.includes(level)) state.completed = [...state.completed,level];
    if (completedCount() >= tracks.length) state.completed = [];
    save(); drawProgress();
    level = nextLevel(); updateModeScreen(); show('mode');
  }
  function chooseMode(mode) {
    if (!['memory','rhythm','melody'].includes(mode)) return;
    cleanupGame(); gameMode = mode; melodyAnswer = []; melodyOrder = mode === 'melody' ? getMelodyOrder() : [];
    updateLevel(); updateGameModeUI(); show('game');
    if (mode === 'memory') playSequence(); else if (mode === 'rhythm') playRhythm(); else playMelody();
  }
  async function handlePadPress(pad) {
    if (gameMode === 'rhythm') return pressRhythmPad(pad);
    if (gameMode === 'memory') return pressMemoryPad(pad);
  }

  async function flash(pad,duration=250){const button=document.querySelector(`[data-pad="${pad}"]`);button.classList.add('is-active');tone(pad,duration/1000);await sleep(duration);button.classList.remove('is-active');}
  async function playSequence(){if(busy)return;busy=true;inputIndex=0;document.querySelectorAll('.tone-pad').forEach(b=>b.disabled=true);$('listen-button').disabled=true;$('listen-button').classList.add('is-playing');$('input-status').textContent=say('Ascolta e memorizza…','Listen and remember…','Слушай и запоминай…','聴いて覚えよう…');await sleep(350);for(const pad of patterns[level]){await flash(pad,260);await sleep(115);}busy=false;document.querySelectorAll('.tone-pad').forEach(b=>b.disabled=false);$('listen-button').disabled=false;$('listen-button').classList.remove('is-playing');$('input-status').textContent=say('Ora ripeti la sequenza','Now repeat the sequence','Теперь повтори последовательность','次は同じ順番でタップ');}
  function toast(message){const el=$('toast');el.textContent=message;el.classList.add('is-visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('is-visible'),2300);}
  async function pressMemoryPad(pad) {
    if (busy) return;
    if (!audio) { try { audio = new (window.AudioContext || window.webkitAudioContext)(); } catch {} }
    await flash(pad,180);
    if (pad !== patterns[level][inputIndex]) { inputIndex = 0; $('input-status').textContent = say('Segnale fuori fase · riascolta e riprova','Signal out of phase · listen and try again','Сигнал сбился · послушай ещё раз','シグナルがずれたよ · もう一度聴こう'); $('input-status').classList.add('is-error'); return; }
    inputIndex++;
    if (inputIndex === patterns[level].length) { busy = true; $('input-status').textContent = say('Segnale agganciato · frammento sbloccato','Signal locked · fragment unlocked','Сигнал пойман · фрагмент открыт','シグナル受信 · フラグメント解放'); $('input-status').classList.remove('is-error'); $('input-status').classList.add('is-success'); completeLevel(); }
  }
  function getPlayerName(){const fallback=say('CERCATORE DI SEGNALI','SIGNAL SEEKER','ИСКАТЕЛЬ СИГНАЛА','シグナル・シーカー');return String(state.playerName||'').trim().replace(/[<>\u0000-\u001f]/g,'').slice(0,20)||fallback;}
  function drawRewardArtwork(){const canvas=$('reward-artwork'),ctx=canvas.getContext('2d'),track=currentTrack(),sequence=currentSequence(),hue=(track.n*47+155)%360,name=getPlayerName(),w=canvas.width,h=canvas.height;if(!rewardCover){rewardCover=new Image();rewardCover.onload=()=>drawRewardArtwork();rewardCover.onerror=()=>{rewardCoverFailed=true;drawRewardArtwork();};rewardCover.src='./exotic-automatic-cover.jpg';} const bg=ctx.createLinearGradient(0,0,w,h);bg.addColorStop(0,'#101b28');bg.addColorStop(.5,'#070b13');bg.addColorStop(1,'#0d1722');ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);ctx.save();ctx.strokeStyle=`hsla(${hue},90%,72%,.075)`;ctx.lineWidth=1;for(let x=35;x<w;x+=48){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke()}for(let y=20;y<h;y+=48){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}for(let i=0;i<54;i++){const x=(i*173+track.n*71)%w,y=(i*239+track.n*113)%h;ctx.fillStyle=`hsla(${hue},90%,82%,${.16+(i%4)*.1})`;ctx.fillRect(x,y,2+(i%3),2+(i%3));}ctx.restore();ctx.strokeStyle='rgba(224,243,252,.68)';ctx.lineWidth=2;ctx.strokeRect(22,22,w-44,h-44);ctx.strokeStyle=`hsla(${hue},95%,75%,.8)`;ctx.strokeRect(31,31,w-62,h-62);ctx.fillStyle='#d6e6ee';ctx.font='bold 27px monospace';ctx.fillText('SUN GROUND',64,84);ctx.fillStyle='#8c9aa8';ctx.font='17px monospace';ctx.textAlign='right';ctx.fillText('EXOTIC AUTOMATIC  /  SIGNAL HUNT',w-64,82);ctx.textAlign='left';ctx.strokeStyle='rgba(212,231,242,.3)';ctx.beginPath();ctx.moveTo(64,112);ctx.lineTo(w-64,112);ctx.stroke();ctx.fillStyle=`hsl(${hue},100%,78%)`;ctx.font='bold 20px monospace';ctx.fillText(say('TRASMISSIONE DECIFRATA','SIGNAL RECOVERED','СИГНАЛ ВОССТАНОВЛЕН','シグナル復元'),64,164);ctx.fillStyle='#f4f8fa';ctx.font='bold 208px Arial,sans-serif';ctx.fillText(String(track.n).padStart(2,'0'),58,372);ctx.save();ctx.shadowColor=`hsla(${hue},100%,70%,.42)`;ctx.shadowBlur=32;if(!rewardCover?.complete||!rewardCover.naturalWidth){ctx.fillStyle='rgba(255,255,255,.04)';ctx.fillRect(720,150,282,282);ctx.strokeStyle=`hsl(${hue},90%,78%)`;ctx.lineWidth=3;ctx.strokeRect(736,166,250,250);ctx.fillStyle=`hsl(${hue},100%,82%)`;ctx.font='bold 28px monospace';ctx.fillText('SG / EA',770,278);ctx.fillText(String(track.n).padStart(2,'0'),840,332);}else ctx.drawImage(rewardCover,720,150,282,282);ctx.restore();ctx.strokeStyle=`hsl(${hue},90%,78%)`;ctx.lineWidth=3;ctx.strokeRect(720,150,282,282);ctx.fillStyle='#9badbb';ctx.font='16px monospace';ctx.fillText(`TRACK / ${String(track.n).padStart(2,'0')}  ·  MISSION / ${String(level+1).padStart(2,'0')}`,66,420);ctx.fillStyle='#fff';const titleSize=Math.min(58,920/Math.max(track.title.length*.62,1));ctx.font=`600 ${titleSize}px Arial,"Yu Gothic",sans-serif`;ctx.fillText(track.title,64,496);ctx.fillStyle='#91a5b3';ctx.font='16px monospace';ctx.fillText(say('IL TUO FRAMMENTO SONORO','YOUR SOUND FRAGMENT','ТВОЙ ЗВУКОВОЙ ФРАГМЕНТ','あなたのサウンド・フラグメント'),64,554);ctx.fillStyle=`hsla(${hue},85%,76%,.14)`;for(let r=70;r<510;r+=72){ctx.beginPath();ctx.ellipse(w/2,793,r,r*.36,-.12,0,Math.PI*2);ctx.strokeStyle=`hsla(${hue},85%,76%,${.2-r/3000})`;ctx.lineWidth=1;ctx.stroke()}const pts=sequence.map((pad,i)=>[76+i*(928/Math.max(1,sequence.length-1)),850-pad*62]);ctx.save();ctx.beginPath();ctx.moveTo(...pts[0]);pts.slice(1).forEach(([x,y])=>ctx.lineTo(x,y));ctx.strokeStyle=`hsl(${hue},100%,78%)`;ctx.lineWidth=7;ctx.shadowColor=`hsl(${hue},100%,75%)`;ctx.shadowBlur=24;ctx.stroke();pts.forEach(([x,y],i)=>{ctx.beginPath();ctx.arc(x,y,11+sequence[i]*2,0,Math.PI*2);ctx.fillStyle='#08101a';ctx.fill();ctx.strokeStyle=`hsl(${(hue+sequence[i]*28)%360},100%,83%)`;ctx.lineWidth=4;ctx.stroke();ctx.fillStyle='#e7f7ff';ctx.font='12px monospace';ctx.textAlign='center';ctx.fillText(String(i+1).padStart(2,'0'),x,y+34)});ctx.restore();ctx.textAlign='left';ctx.fillStyle='#8296a5';ctx.font='14px monospace';ctx.fillText(`NOTE PATH  /  ${sequence.map(n=>n+1).join(' — ')}`,64,1000);ctx.strokeStyle='rgba(220,237,247,.25)';ctx.beginPath();ctx.moveTo(64,1044);ctx.lineTo(w-64,1044);ctx.stroke();ctx.fillStyle='#8296a5';ctx.font='14px monospace';ctx.fillText(say('RITROVATO DA','RECOVERED BY','НАЙДЕНО ИГРОКОМ','発見したプレイヤー'),64,1092);ctx.fillStyle='#f3f8fb';ctx.font='bold 38px Arial,"Yu Gothic",sans-serif';ctx.fillText(name,64,1145);ctx.fillStyle=`hsl(${hue},90%,78%)`;ctx.font='14px monospace';ctx.fillText(`SG / EA-${String(track.n).padStart(2,'0')}  ·  SUNGROUND3.BANDCAMP.COM`,64,1230);ctx.textAlign='right';ctx.fillStyle='#aebbc5';ctx.font='16px monospace';ctx.fillText('EXOTIC AUTOMATIC',w-64,1290);ctx.textAlign='left';rewardReady=true;$('save-reward-button').disabled=false;$('share-button').disabled=false;}
  function showReward() {
    clearRhythmTimer(); rhythmAttempt = null; show('result'); busy = false; rewardReady = false; $('save-reward-button').disabled = true; $('share-button').disabled = true;
    const t = currentTrack(); $('player-name-input').value = state.playerName || '';
    const copy = gameMode === 'rhythm' ? say('Hai tenuto il ritmo sulla traccia ' + t.n + ', “' + t.title + '”.','You held the beat on track ' + t.n + ', “' + t.title + '”.','Ты удержал ритм на треке ' + t.n + ', «' + t.title + '».','トラック' + t.n + '「' + t.title + '」のリズムをつかみました。') : gameMode === 'melody' ? say('Hai ricostruito il motivo synth ispirato a “' + t.title + '”, traccia ' + t.n + '.','You rebuilt the synth phrase inspired by “' + t.title + '”, track ' + t.n + '.','Ты собрал синтезаторный мотив по мотивам «' + t.title + '», трек ' + t.n + '.','「' + t.title + '」に着想を得たシンセフレーズを再構築しました。トラック' + t.n + '。') : say('Hai ricostruito il segnale di “' + t.title + '”, traccia ' + t.n + ' di Exotic Automatic.','You rebuilt the signal for “' + t.title + '”, track ' + t.n + ' of Exotic Automatic.','Ты восстановил сигнал «' + t.title + '», трек ' + t.n + ' из Exotic Automatic.','「' + t.title + '」のシグナルを再現。Exotic Automaticの' + t.n + '曲目。');
    $('result-copy').textContent = copy; updateContinueButton(); drawRewardArtwork();
  }
  function enterGame() {
    try { spotifyController?.pause(); } catch {}
    if (completedCount() >= tracks.length) { state.completed = []; save(); }
    level = nextLevel(); updateModeScreen(); show('mode');
  }
  function start(){if(state.fanAccess){enterGame();return;}show('fan');}
  function goHome() { cleanupGame(); show('home'); }
  function makeCard(){if(!rewardReady)return;const canvas=$('reward-artwork');canvas.toBlob(blob=>{if(!blob){toast(say('Impossibile creare il file','Could not create the image','Не удалось создать изображение','画像を作成できませんでした'));return;}const a=document.createElement('a'),name=getPlayerName().toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'signal-seeker';a.href=URL.createObjectURL(blob);a.download=`sun-ground-${currentTrack().n}-${name}.png`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1200);},'image/png');}
  async function shareLevel(){const t=currentTrack(),text=say(`Sto decifrando il segnale ${t.n} di Sun Ground — Exotic Automatic. Prova anche tu Signal Hunt!`,`I'm decoding Sun Ground's signal ${t.n} — Exotic Automatic. Try Signal Hunt!`,`Я расшифровываю сигнал ${t.n} Sun Ground — Exotic Automatic. Попробуй Signal Hunt!`,`Sun Ground「Exotic Automatic」のシグナル${t.n}を解読中。Signal Huntに挑戦！`);try{if(navigator.share)await navigator.share({title:'Sun Ground — Signal Hunt',text,url:location.href});else{await navigator.clipboard.writeText(`${text} ${location.href}`);toast(say('Invito copiato: mandalo a un amico','Invite copied — send it to a friend','Приглашение скопировано — отправь другу','招待リンクをコピーしました'));}}catch{}}
  async function share(){if(!rewardReady)return;const t=currentTrack(),name=getPlayerName(),text=say(`${name} ha decifrato il segnale ${t.n} di Sun Ground: Exotic Automatic. Tocca a te!`,`${name} decoded Sun Ground’s signal ${t.n} from Exotic Automatic. Your turn!`,`${name} расшифровал сигнал ${t.n} Sun Ground из Exotic Automatic. Твоя очередь!`,`${name}がSun Ground「Exotic Automatic」のシグナル${t.n}を解読！次はあなた！`);try{if(navigator.share){const canvas=$('reward-artwork'),blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png')),file=blob&&typeof File!=='undefined'?new File([blob],`sun-ground-signal-${t.n}.png`,{type:'image/png'}):null;if(file&&navigator.canShare?.({files:[file]}))await navigator.share({title:'Sun Ground — Signal Hunt',text,files:[file]});else await navigator.share({title:'Sun Ground — Signal Hunt',text,url:location.href});}else{await navigator.clipboard.writeText(`${text} ${location.href}`);toast(say('Link e messaggio copiati','Link and message copied','Ссылка и сообщение скопированы','リンクとメッセージをコピーしました'));}}catch{}}
  $('language-toggle').addEventListener('change',event=>setLanguage(event.target.value));
  $('wordmark-home').addEventListener('click',event=>{event.preventDefault();goHome();});$('start-button').addEventListener('click',start);$('fan-back-button').addEventListener('click',goHome);$('back-button').addEventListener('click',goHome); $('mode-back-button').addEventListener('click',goHome); document.querySelectorAll('[data-game-mode]').forEach(button=>button.addEventListener('click',()=>chooseMode(button.dataset.gameMode))); $('melody-reset').addEventListener('click',resetMelody);$('result-home-button').addEventListener('click',()=>{drawProgress();goHome();});$('listen-button').addEventListener('click',()=>{if(gameMode==='memory')playSequence();else if(gameMode==='rhythm')playRhythm();else playMelody();});document.querySelectorAll('.tone-pad').forEach(b=>b.addEventListener('click',()=>handlePadPress(Number(b.dataset.pad))));document.querySelectorAll('[data-timbre]').forEach(button=>button.addEventListener('click',()=>{state.timbre=button.dataset.timbre;save();updateTimbrePicker();tone(0,.2);}));$('player-name-input').addEventListener('input',event=>{state.playerName=event.target.value.slice(0,20);save();drawRewardArtwork();});$('save-reward-button').addEventListener('click',makeCard);$('share-button').addEventListener('click',share);$('share-level-button').addEventListener('click',shareLevel);$('continue-button').addEventListener('click',continueToNextLevel);
  window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();deferredInstallPrompt=event;$('install-app').hidden=false;});
  $('install-app').addEventListener('click',async()=>{if(!deferredInstallPrompt)return;deferredInstallPrompt.prompt();await deferredInstallPrompt.userChoice;deferredInstallPrompt=null;$('install-app').hidden=true;});
  window.addEventListener('appinstalled',()=>{$('install-app').hidden=true;});
  document.querySelectorAll('[data-pass-method]').forEach(button=>button.addEventListener('click',()=>{state.fanAccess=button.dataset.passMethod;save();updateFanBadge();$('fan-status').textContent=say('Fan Pass demo attivo in questo browser · prima missione: traccia 7','Demo Fan Pass active in this browser · first mission: track 7','Демо Fan Pass активирован в этом браузере · первая миссия: трек 7','このブラウザーでデモFan Passを有効化 · 最初のミッション：7曲目');enterGame();}));
  $('google-preview-button').addEventListener('click',()=>{state.fanAccess='google-preview';save();updateFanBadge();toast(say('Fan Pass demo attivo · nessun account Google collegato','Demo Fan Pass active · no Google account connected','Демо Fan Pass активирован · аккаунт Google не подключён','デモFan Passを有効化 · Googleアカウントは未接続'));enterGame();});
  window.onSpotifyIframeApiReady = IFrameAPI => { const element=$('spotify-player');if(!element||!IFrameAPI?.createController)return;IFrameAPI.createController(element,{width:'100%',height:'352',uri:'spotify:album:3d7kjv4ECBPjboeupDRA4S'},controller=>{spotifyController=controller;}); };
  const spotifyApi=document.createElement('script');spotifyApi.src='https://open.spotify.com/embed/iframe-api/v1';spotifyApi.async=true;document.body.append(spotifyApi);
  if('serviceWorker' in navigator && location.protocol!=='file:')navigator.serviceWorker.register('./service-worker.js').catch(()=>{});
  let savedLanguage='en';try{savedLanguage=localStorage.getItem('sun-ground-language-v4')||'en';}catch{}setLanguage(savedLanguage);drawProgress();updateFanBadge();
})();






