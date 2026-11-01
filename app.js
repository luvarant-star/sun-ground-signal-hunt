(() => {
  'use strict';

  const levels = [
    { track: 'Exotic Automatic', short: 'EXOTIC\nAUTOMATIC', biome: 'Auto City', bandcamp: '2162922717', slug: 'exotic-automatic', color: '#ff774d', deep: '#28112a', sky: '#b93c61' },
    { track: 'Echoes and Devotions', short: 'ECHOES AND\nDEVOTIONS', biome: 'Echo Canyon', bandcamp: '4173867401', slug: 'echoes-and-devotions', color: '#ffa76e', deep: '#38233b', sky: '#994e70' },
    { track: 'Two in Orbit', short: 'TWO IN\nORBIT', biome: 'Twin Moons', bandcamp: '3322024772', slug: 'two-in-orbit', color: '#93a7ff', deep: '#172045', sky: '#3c5e9d' },
    { track: 'Neverborn Evil', short: 'NEVERBORN\nEVIL', biome: 'Neon Wilds', bandcamp: '216380227', slug: 'neverbornevil', color: '#83ec90', deep: '#122e2d', sky: '#32766f' },
    { track: 'Wicked Signal', short: 'WICKED\nSIGNAL', biome: 'Signal Storm', bandcamp: '522880833', slug: 'wicked-signal', color: '#ff6976', deep: '#321326', sky: '#9d3c58' },
    { track: 'Nrkey My Love', short: 'NRKEY\nMY LOVE', biome: 'Red Dust', bandcamp: '343956324', slug: 'nrkey-my-love', color: '#ff774d', deep: '#28112a', sky: '#b93c61' },
    { track: 'Infamous Beach', short: 'INFAMOUS\nBEACH', biome: 'Skull Shore', bandcamp: '3234518234', slug: 'infamous-beach', color: '#67dce9', deep: '#172b43', sky: '#4277a0' },
    { track: 'A Sea Without Shore', short: 'A SEA\nWITHOUT SHORE', biome: 'Glass Tides', bandcamp: '1720569243', slug: 'a-sea-without-shore', color: '#58d7e5', deep: '#102c48', sky: '#256f9b' },
    { track: 'Epitaph of the Sun', short: 'EPITAPH OF\nTHE SUN', biome: 'Sunken Temple', bandcamp: '3672683703', slug: 'epitaph-of-the-sun', color: '#ffd05c', deep: '#322322', sky: '#9a4d46' },
    { track: 'Unknown', short: 'UNKNOWN', biome: 'The Unknown', bandcamp: '1012970733', slug: 'unknown-37', color: '#ba8aff', deep: '#201840', sky: '#553f98' }
  ];

  const copy = {
    en: { free:'FREE TO PLAY', eyebrow:'A COSMIC PLATFORM ADVENTURE', intro:'Run, jump and punch your way across ten strange worlds. Find the fragments of the Magical Skull and bring the signal back to life.', start:'START ADVENTURE', install:'Install on your phone', journey:'YOUR JOURNEY', worlds:'Ten worlds. One skull.', support:'Like the game? Support Sun Ground on Bandcamp — completely optional.', saved:'Free to play · progress saved on this device · no account needed', menu:'MENU', hint:'MOVE ← → · JUMP SPACE · PUNCH X', run:'RUN', punch:'PUNCH', jump:'JUMP', tip:'Punch enemies or stomp them. Hit the boss with a punch, then enter the glowing gate.', musicHint:'LEVEL SONG · PLAY ON BANDCAMP', listen:'Listen to this level’s song', closeMusic:'Close song player', openBandcamp:'Open track on Bandcamp ↗', optional:'OPTIONAL · SUPPORT THE MUSIC', album:'Exotic Automatic on Bandcamp', footer:'RUN · JUMP · FIND THE SKULL', return:'Return to world map', pause:'PAUSED', resume:'RESUME ADVENTURE', resumeCopy:'Take a breath. The world is waiting.', retry:'SIGNAL LOST', retryCopy:'The desert is rough. Your skull fragments are safe — jump back in.', win:'WORLD CLEARED', winCopy:'A skull fragment is yours. The next signal is calling.', final:'THE SKULL IS WHOLE', finalCopy:'Ten worlds crossed. The Magical Skull shines again beneath the sun.', next:'NEXT WORLD', again:'PLAY AGAIN', locked:'Complete the previous world to open this one.', boss:'BOSS', bossAhead:'BOSS · AHEAD', bossDefeated:'BOSS · DEFEATED', noCanvas:'This browser cannot run the game canvas.' },
    it: { free:'GRATIS', eyebrow:'UN’AVVENTURA PLATFORM COSMICA', intro:'Corri, salta e sferra pugni attraverso dieci mondi misteriosi. Trova i frammenti del Teschio Magico e riaccendi il segnale.', start:'INIZIA L’AVVENTURA', install:'Installa sul telefono', journey:'IL TUO VIAGGIO', worlds:'Dieci mondi. Un teschio.', support:'Ti piace il gioco? Sostieni Sun Ground su Bandcamp — è facoltativo.', saved:'Gratis · progressi salvati sul dispositivo · nessun account', menu:'MAPPA', hint:'MUOVI ← → · SALTO SPAZIO · PUGNO X', run:'CORSA', punch:'PUGNO', jump:'SALTO', tip:'Colpisci i nemici o saltagli sopra. Sferra pugni al boss e attraversa il portale luminoso.', musicHint:'BRANO DEL LIVELLO · RIPRODUCI SU BANDCAMP', listen:'Ascolta il brano di questo livello', closeMusic:'Chiudi il lettore musicale', openBandcamp:'Apri il brano su Bandcamp ↗', optional:'FACOLTATIVO · SOSTIENI LA MUSICA', album:'Exotic Automatic su Bandcamp', footer:'CORRI · SALTA · TROVA IL TESCHIO', return:'Torna alla mappa', pause:'IN PAUSA', resume:'RIPRENDI L’AVVENTURA', resumeCopy:'Fai un respiro. Il mondo ti aspetta.', retry:'SEGNALE PERSO', retryCopy:'Il deserto è duro. I frammenti sono al sicuro: riprova!', win:'MONDO COMPLETATO', winCopy:'Hai trovato un frammento del teschio. Il prossimo segnale ti chiama.', final:'IL TESCHIO È COMPLETO', finalCopy:'Dieci mondi attraversati. Il Teschio Magico risplende di nuovo sotto il sole.', next:'MONDO SUCCESSIVO', again:'GIOCA ANCORA', locked:'Completa il mondo precedente per sbloccare questo.', boss:'BOSS', bossAhead:'BOSS · AVANTI', bossDefeated:'BOSS · SCONFITTO', noCanvas:'Questo browser non supporta il canvas del gioco.' },
    ru: { free:'БЕСПЛАТНО', eyebrow:'КОСМИЧЕСКИЙ ПЛАТФОРМЕР', intro:'Беги, прыгай и сражайся в десяти загадочных мирах. Найди осколки Волшебного черепа и оживи сигнал.', start:'НАЧАТЬ ПРИКЛЮЧЕНИЕ', install:'Установить на телефон', journey:'ТВОЁ ПУТЕШЕСТВИЕ', worlds:'Десять миров. Один череп.', support:'Нравится игра? Поддержи Sun Ground на Bandcamp — по желанию.', saved:'Бесплатно · прогресс хранится на устройстве · аккаунт не нужен', menu:'КАРТА', hint:'ДВИЖЕНИЕ ← → · ПРЫЖОК ПРОБЕЛ · УДАР X', run:'БЕГ', punch:'УДАР', jump:'ПРЫЖОК', tip:'Бей врагов или прыгай на них. Ударь босса, затем войди в светящиеся врата.', musicHint:'МУЗЫКА УРОВНЯ · ИГРАТЬ НА BANDCAMP', listen:'Слушать музыку уровня', closeMusic:'Закрыть плеер', openBandcamp:'Открыть трек на Bandcamp ↗', optional:'ПО ЖЕЛАНИЮ · ПОДДЕРЖАТЬ МУЗЫКУ', album:'Exotic Automatic на Bandcamp', footer:'БЕГИ · ПРЫГАЙ · ИЩИ ЧЕРЕП', return:'Вернуться к карте', pause:'ПАУЗА', resume:'ПРОДОЛЖИТЬ', resumeCopy:'Передохни. Мир тебя ждёт.', retry:'СИГНАЛ ПОТЕРЯН', retryCopy:'Пустыня сурова. Осколки черепа в безопасности — попробуй снова.', win:'МИР ПРОЙДЕН', winCopy:'Осколок черепа твой. Следующий сигнал зовёт.', final:'ЧЕРЕП СОБРАН', finalCopy:'Десять миров пройдены. Волшебный череп снова сияет под солнцем.', next:'СЛЕДУЮЩИЙ МИР', again:'ИГРАТЬ СНОВА', locked:'Пройди предыдущий мир, чтобы открыть этот.', boss:'БОСС', bossAhead:'БОСС · ВПЕРЕДИ', bossDefeated:'БОСС · ПОБЕЖДЁН', noCanvas:'Этот браузер не поддерживает игровое полотно.' },
    ja: { free:'無料', eyebrow:'宇宙の2Dプラットフォーマー', intro:'10の不思議な世界を走り、跳び、パンチで進もう。魔法のドクロの欠片を見つけ、シグナルをよみがえらせよう。', start:'冒険を始める', install:'スマートフォンにインストール', journey:'冒険の記録', worlds:'10の世界。ひとつのドクロ。', support:'ゲームを気に入ったらBandcampでSun Groundを応援できます（任意）。', saved:'無料 · 進行状況はこの端末に保存 · アカウント不要', menu:'マップ', hint:'移動 ← → · ジャンプ SPACE · パンチ X', run:'ダッシュ', punch:'パンチ', jump:'ジャンプ', tip:'敵をパンチするか、踏みつけよう。ボスを倒して、光るゲートに入ろう。', musicHint:'ステージの曲 · BANDCAMPで再生', listen:'このステージの曲を聴く', closeMusic:'プレイヤーを閉じる', openBandcamp:'Bandcampでトラックを開く ↗', optional:'任意 · 音楽を応援', album:'BandcampでExotic Automaticを聴く', footer:'走る · 跳ぶ · ドクロを探す', return:'ワールドマップに戻る', pause:'一時停止', resume:'冒険を再開', resumeCopy:'ひと休み。世界が待っている。', retry:'シグナル消失', retryCopy:'砂漠は手ごわい。ドクロの欠片は無事だよ。もう一度挑戦しよう。', win:'ワールドクリア', winCopy:'ドクロの欠片を手に入れた。次のシグナルが呼んでいる。', final:'ドクロが完成', finalCopy:'10の世界を旅した。魔法のドクロが太陽の下で再び輝く。', next:'次の世界へ', again:'もう一度遊ぶ', locked:'前のワールドをクリアすると解放されます。', boss:'ボス', bossAhead:'ボス · この先', bossDefeated:'ボス · 撃破', noCanvas:'このブラウザーはゲームキャンバスに対応していません。' }
  };

  const $ = id => document.getElementById(id);
  const art = {};
  for (const [key, src] of Object.entries({ panorama:'./assets/pixel-desert-panorama.png', hero:'./assets/sun-ground-sprite-sheet.png', sprites:'./assets/pixel-game-sprites.png' })) {
    art[key] = new Image(); art[key].src = src;
  }
  const canvas = $('game-canvas');
  const ctx = canvas.getContext('2d');
  const storeKey = 'sun-ground-skull-platformer-v1';
  let language = localStorage.getItem('sun-ground-language-v4') || 'en';
  let progress = { cleared: [] };
  try { progress = { ...progress, ...JSON.parse(localStorage.getItem(storeKey) || '{}') }; } catch {}
  progress.cleared = Array.isArray(progress.cleared) ? [...new Set(progress.cleared.filter(n => Number.isInteger(n) && n >= 0 && n < levels.length))] : [];
  let currentLevel = 0;
  let world = null;
  let animationId = 0;
  let previousFrame = 0;
  let overlayMode = '';
  let deferredInstallPrompt = null;
  let audioContext = null;
  let sfxBus = null;
  const keys = { left:false, right:false, run:false, jump:false, punch:false, jumpPressed:false, punchPressed:false };

  function say(key) { return (copy[language] || copy.en)[key] || copy.en[key] || key; }
  function unlockAudio() {
    const AudioApi = window.AudioContext || window.webkitAudioContext;
    if (!AudioApi) return;
    try {
      if (!audioContext) {
        audioContext = new AudioApi();
        sfxBus = audioContext.createGain();
        sfxBus.gain.value = .16;
        sfxBus.connect(audioContext.destination);
      }
      if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
    } catch { audioContext = null; sfxBus = null; }
  }
  function arcadeSound(kind) {
    if (!audioContext || !sfxBus || audioContext.state !== 'running') return;
    const now = audioContext.currentTime;
    const note = (frequency, endFrequency, start, duration, type, volume) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, now + start);
      oscillator.frequency.exponentialRampToValueAtTime(Math.max(35, endFrequency), now + start + duration);
      gain.gain.setValueAtTime(.0001, now + start);
      gain.gain.exponentialRampToValueAtTime(volume, now + start + .008);
      gain.gain.exponentialRampToValueAtTime(.0001, now + start + duration);
      oscillator.connect(gain); gain.connect(sfxBus);
      oscillator.start(now + start); oscillator.stop(now + start + duration + .02);
    };
    if (kind === 'jump') note(410, 820, 0, .13, 'square', .19);
    else if (kind === 'punch') { note(180, 65, 0, .095, 'sawtooth', .23); note(540, 190, .015, .07, 'square', .1); }
    else if (kind === 'collect') { note(760, 1050, 0, .12, 'triangle', .19); note(1050, 1480, .07, .14, 'sine', .16); }
    else if (kind === 'enemy') { note(650, 170, 0, .16, 'square', .2); note(300, 95, .045, .14, 'triangle', .12); }
    else if (kind === 'hurt') { note(180, 58, 0, .23, 'sawtooth', .23); note(115, 70, .025, .2, 'square', .1); }
    else if (kind === 'boss') { note(110, 48, 0, .2, 'triangle', .28); note(440, 130, .015, .12, 'square', .14); }
    else if (kind === 'win') [523, 659, 784, 1047].forEach((frequency, i) => note(frequency, frequency * 1.02, i * .11, .16, 'square', .15));
  }
  function save() { try { localStorage.setItem(storeKey, JSON.stringify(progress)); } catch {} }
  function setLanguage(value) {
    language = ['it','en','ru','ja'].includes(value) ? value : 'en';
    document.documentElement.lang = language;
    document.querySelectorAll('[data-copy]').forEach(node => { const key = node.dataset.copy; node.textContent = say(key); });
    $('language-toggle').value = language;
    $('language-toggle').setAttribute('aria-label', language === 'it' ? 'Lingua' : language === 'ja' ? '言語' : language === 'ru' ? 'Язык' : 'Language');
    document.title = 'Sun Ground — The Magical Skull';
    try { localStorage.setItem('sun-ground-language-v4', language); } catch {}
    if (world) updateHud();
    renderWorldList();
    if (overlayMode) showOverlay(overlayMode);
  }
  function unlocked(index) { return index === 0 || progress.cleared.includes(index - 1); }
  function nextLevel() { const next = levels.findIndex((_, i) => !progress.cleared.includes(i)); return next < 0 ? 0 : next; }
  function updateProgress() {
    const count = progress.cleared.length;
    $('progress-count').textContent = count + ' / 10';
    $('home-progress').innerHTML = levels.map((_, i) => '<i class="progress-node' + (progress.cleared.includes(i) ? ' is-done' : '') + '"></i>').join('');
    renderWorldList();
  }
  function renderWorldList() {
    const homeList = $('level-list'), gameList = $('game-level-list');
    if (!homeList && !gameList) return;
    if (homeList) homeList.innerHTML = levels.map((stage, i) => {
      const done = progress.cleared.includes(i), open = unlocked(i);
      const title = (language === 'it' ? ['Città automatica','Canyon degli echi','Due lune','Giungla neon','Tempesta di segnali','Polvere rossa','Spiaggia del teschio','Mare di vetro','Tempio sommerso','L’ignoto'] :
        language === 'ja' ? ['自動都市','響きの峡谷','ふたつの月','ネオンの森','シグナルの嵐','赤い砂','ドクロの浜辺','ガラスの潮','沈んだ神殿','未知の世界'] :
        language === 'ru' ? ['Город машин','Каньон эха','Две луны','Неоновые джунгли','Шторм сигнала','Красная пыль','Черепной пляж','Стеклянные приливы','Затонувший храм','Неизвестность'] : levels.map(item => item.biome))[i];
      return '<button class="level-chip' + (done ? ' is-done' : '') + '" type="button" data-level="' + i + '"' + (open ? '' : ' disabled') + ' aria-label="' + (i + 1) + ': ' + stage.track + (done ? ' · complete' : open ? ' · ready' : ' · locked') + '"><span>' + String(i + 1).padStart(2,'0') + '</span><small>' + title + '</small><b aria-hidden="true">' + (done ? '✓' : open ? '↗' : '·') + '</b></button>';
    }).join('');
    if (gameList) gameList.innerHTML = levels.map((stage, i) => {
      const done = progress.cleared.includes(i), open = unlocked(i), state = done ? 'complete' : open ? 'ready' : 'locked';
      return '<button class="game-level-card' + (currentLevel === i && world ? ' is-current' : '') + (done ? ' is-done' : '') + '" type="button" data-level="' + i + '"' + (open ? '' : ' disabled') + ' aria-label="' + (i + 1) + ': ' + stage.track + ' · ' + state + '" style="--thumb-x:' + (i * 11) + '%;--stage-color:' + stage.color + '"><span class="game-level-thumb"></span><b>' + String(i + 1).padStart(2,'0') + '</b><small>' + stage.short.replace(/\n/g,'<br>') + '</small></button>';
    }).join('');
    document.querySelectorAll('#level-list [data-level], #game-level-list [data-level]').forEach(button => button.addEventListener('click', () => startLevel(Number(button.dataset.level))));
  }
  function showScreen(name) {
    if (name === 'game') document.body.classList.add('playing-game');
    else document.body.classList.remove('playing-game');
    $('home-screen').hidden = name !== 'home';
    $('game-screen').hidden = name !== 'game';
    document.querySelector('.site-footer').hidden = name === 'game';
    window.scrollTo({ top:0, behavior:'instant' });
  }
  function buildWorld(index) {
    const width = 6250, floor = 330, platforms = [], pits = [], collectibles = [], enemies = [];
    let cursor = 0;
    for (let i = 0; i < 8; i++) {
      const pitX = 420 + i * 405 + ((index * 37 + i * 19) % 38);
      const pitW = 102 + ((index * 23 + i * 17) % 42);
      if (pitX > cursor) platforms.push({ x:cursor, y:floor, w:pitX - cursor, h:88, ground:true });
      pits.push({ x:pitX, w:pitW });
      cursor = pitX + pitW;
      platforms.push({ x:pitX - 18, y:floor - 80 - (i % 2) * 24, w:pitW + 36, h:18, bridge:true });
    }
    platforms.push({ x:cursor, y:floor, w:width - cursor + 300, h:88, ground:true });
    for (let i = 0; i < 13; i++) {
      const x = 350 + i * 410;
      if (x > width - 620) continue;
      const y = floor - 90 - ((i + index) % 3) * 26;
      platforms.push({ x, y, w:124 + ((index + i) % 3) * 22, h:16, floating:true });
      if (i % 2 === 0) platforms.push({ x:x + 194, y:y + 72, w:104, h:15, floating:true });
    }
    for (let i = 0; i < 23; i++) {
      const x = 255 + i * 245 + ((index * 31 + i * 13) % 72);
      let y = floor - 35;
      const platform = platforms.find(p => !p.ground && x >= p.x + 8 && x <= p.x + p.w - 8 && p.y < floor - 30);
      if (platform && i % 3 !== 0) y = platform.y - 38;
      const pit = pits.find(p => x > p.x - 20 && x < p.x + p.w + 20);
      if (pit) y = floor - 123 - (i % 2) * 20;
      collectibles.push({ x, y, taken:false, phase:i * .7 });
    }
    for (let i = 0; i < 8; i++) {
      const x = 650 + i * 655;
      if (x < width - 900 && !pits.some(p => x > p.x - 75 && x < p.x + p.w + 30)) enemies.push({ x, y:floor - 39, base:x, range:70 + (i % 3) * 15, dir:i % 2 ? -1 : 1, alive:true, type:i % 3 });
    }
    return {
      index, data:levels[index], width, floor, platforms, pits, collectibles, enemies,
      player:{ x:240, y:floor - 52, w:34, h:50, vx:0, vy:0, facing:1, grounded:false, coyote:0, punch:0, invulnerable:0, lives:3, checkpoint:240, anim:0 },
      boss:{ x:width - 505, y:floor - 94, w:76, h:94, hp:4 + Math.floor(index / 3), maxHp:4 + Math.floor(index / 3), dir:-1, active:false, defeated:false, hitCooldown:0, anim:0 },
      gateX:width - 92, camera:0, shards:0, elapsed:0, complete:false, paused:false
    };
  }
  function startLevel(index) {
    unlockAudio();
    currentLevel = Math.max(0, Math.min(levels.length - 1, index));
    world = buildWorld(currentLevel);
    overlayMode = '';
    $('game-overlay').hidden = true;
    showScreen('game');
    updateMusicPlayer();
    updateHud();
    renderWorldList();
    keys.left = keys.right = keys.run = keys.jump = keys.punch = false;
    keys.jumpPressed = keys.punchPressed = false;
    previousFrame = performance.now();
    cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(frame);
    canvas.focus({ preventScroll:true });
  }
  function updateHud() {
    if (!world) return;
    const stage = levels[currentLevel];
    $('level-number').textContent = (language === 'it' ? 'MONDO ' : language === 'ja' ? 'ワールド ' : language === 'ru' ? 'МИР ' : 'WORLD ') + String(currentLevel + 1).padStart(2,'0');
    $('level-count').textContent = String(currentLevel + 1).padStart(2,'0') + ' / 10';
    $('stage-biome').textContent = 'LV.' + String(currentLevel + 1).padStart(2,'0');
    $('track-name').textContent = stage.track;
    $('life-count').textContent = '× ' + world.player.lives;
    $('health').textContent = '♥ '.repeat(world.player.lives).trim() || '♡';
    $('health').setAttribute('aria-label', world.player.lives + ' lives');
    $('shard-count').textContent = progress.cleared.length + '/10';
    $('music-track-title').textContent = stage.track;
    $('gem-count').textContent = '✦ ' + world.shards + ' / ' + world.collectibles.length;
    $('boss-status').textContent = world.boss.defeated ? say('bossDefeated') : say('bossAhead');
    $('distance-status').textContent = Math.max(0, Math.floor(world.player.x / 10)) + ' m';
    $('game-progress').innerHTML = levels.map((_, i) => '<i class="progress-node' + (progress.cleared.includes(i) ? ' is-done' : i === currentLevel ? ' is-current' : '') + '"></i>').join('');
    document.documentElement.style.setProperty('--stage-color', stage.color);
  }
  function updateMusicPlayer() {
    const stage = levels[currentLevel];
    const url = 'https://bandcamp.com/EmbeddedPlayer/track=' + stage.bandcamp + '/size=small/bgcol=100b1b/linkcol=ffbf65/transparent=true/';
    const player = $('bandcamp-player');
    if (player.dataset.track !== stage.bandcamp) {
      player.src = url;
      player.dataset.track = stage.bandcamp;
    }
    player.title = stage.track + ' by Sun Ground on Bandcamp';
    $('bandcamp-track-link').href = 'https://sunground3.bandcamp.com/track/' + stage.slug;
    $('music-track-title').textContent = stage.track;
    $('music-play-button').setAttribute('aria-label', say('listen'));
    $('music-play-button').title = say('listen');
    $('music-close-button').setAttribute('aria-label', say('closeMusic'));
  }
  function toggleMusicPlayer(show) {
    const open = typeof show === 'boolean' ? show : $('music-popover').hidden;
    $('music-popover').hidden = !open;
    $('music-play-button').setAttribute('aria-expanded', String(open));
    if (open) $('music-close-button').focus({ preventScroll:true });
    else $('music-play-button').focus({ preventScroll:true });
  }
  function showOverlay(mode) {
    overlayMode = mode;
    const overlay = $('game-overlay');
    const kicker = $('overlay-kicker'), title = $('overlay-title'), message = $('overlay-copy'), action = $('overlay-action'), menu = $('overlay-menu');
    let label = 'resume', heading = say('pause'), text = say('resumeCopy'), button = say('resume');
    if (mode === 'lost') { label = 'retry'; kicker.textContent = say('retry'); heading = say('retry'); text = say('retryCopy'); button = language === 'it' ? 'RIPROVA' : language === 'ja' ? 'もう一度' : language === 'ru' ? 'ПОВТОРИТЬ' : 'TRY AGAIN'; }
    else if (mode === 'won') {
      const final = currentLevel === levels.length - 1;
      label = final ? 'again' : 'next'; kicker.textContent = final ? say('final') : say('win'); heading = final ? say('final') : say('win'); text = final ? say('finalCopy') : say('winCopy'); button = final ? say('again') : say('next');
    } else { kicker.textContent = say('pause'); }
    title.textContent = heading;
    message.textContent = text;
    action.querySelector('span').textContent = button;
    action.dataset.action = label;
    menu.hidden = mode !== 'lost' && mode !== 'won';
    menu.textContent = say('return');
    overlay.hidden = false;
  }
  function pauseGame() { if (!world || world.complete || overlayMode) return; world.paused = true; showOverlay('pause'); }
  function resumeGame() { if (!world) return; world.paused = false; overlayMode = ''; $('game-overlay').hidden = true; previousFrame = performance.now(); animationId = requestAnimationFrame(frame); }
  function damagePlayer(knockDirection) {
    if (world.player.invulnerable > 0) return;
    arcadeSound('hurt');
    world.player.lives--;
    world.player.invulnerable = 1.25;
    world.player.vx = knockDirection * 280;
    world.player.vy = -280;
    if (world.player.lives <= 0) { world.paused = true; world.complete = true; showOverlay('lost'); }
    updateHud();
  }
  function respawnFromPit() {
    arcadeSound('hurt');
    world.player.lives--;
    world.player.x = world.player.checkpoint;
    world.player.y = world.floor - world.player.h - 6;
    world.player.vx = world.player.vy = 0;
    world.player.invulnerable = 1.4;
    if (world.player.lives <= 0) { world.paused = true; world.complete = true; showOverlay('lost'); }
    updateHud();
  }
  function update(dt) {
    if (!world || world.paused || world.complete) return;
    const p = world.player;
    world.elapsed += dt;
    p.anim += Math.abs(p.vx) * dt * .035;
    p.invulnerable = Math.max(0, p.invulnerable - dt);
    p.punch = Math.max(0, p.punch - dt);
    const dir = (keys.right ? 1 : 0) - (keys.left ? 1 : 0);
    if (dir) { p.facing = dir; p.vx += dir * (keys.run ? 1700 : 1250) * dt; }
    else p.vx *= Math.pow(p.grounded ? .001 : .08, dt);
    const maxSpeed = keys.run ? 365 : 250;
    p.vx = Math.max(-maxSpeed, Math.min(maxSpeed, p.vx));
    if (keys.jumpPressed && p.coyote > 0) { p.vy = -650; p.grounded = false; p.coyote = 0; arcadeSound('jump'); }
    keys.jumpPressed = false;
    if (keys.punchPressed) { p.punch = .22; keys.punchPressed = false; arcadeSound('punch'); }
    p.vy = Math.min(900, p.vy + 1740 * dt);
    const oldBottom = p.y + p.h;
    p.x = Math.max(0, Math.min(world.width - p.w, p.x + p.vx * dt));
    p.y += p.vy * dt;
    p.grounded = false;
    for (const platform of world.platforms) {
      if (p.vy < 0 || p.x + p.w <= platform.x || p.x >= platform.x + platform.w) continue;
      const bottom = p.y + p.h;
      if (oldBottom <= platform.y + 5 && bottom >= platform.y && bottom < platform.y + 30) {
        p.y = platform.y - p.h; p.vy = 0; p.grounded = true;
      }
    }
    p.coyote = p.grounded ? .11 : Math.max(0, p.coyote - dt);
    if (p.y > 635) { respawnFromPit(); return; }
    if (p.x > p.checkpoint + 1300) p.checkpoint = Math.floor(p.x / 1300) * 1300;

    for (const gem of world.collectibles) {
      if (gem.taken) continue;
      const gy = gem.y + Math.sin(world.elapsed * 3 + gem.phase) * 5;
      if (Math.abs((p.x + p.w / 2) - gem.x) < 29 && Math.abs((p.y + p.h / 2) - gy) < 34) { gem.taken = true; world.shards++; arcadeSound('collect'); }
    }
    for (const enemy of world.enemies) {
      if (!enemy.alive) continue;
      enemy.x += enemy.dir * (50 + currentLevel * 3) * dt;
      if (Math.abs(enemy.x - enemy.base) > enemy.range) enemy.dir *= -1;
      const hit = p.x < enemy.x + 37 && p.x + p.w > enemy.x && p.y < enemy.y + 36 && p.y + p.h > enemy.y;
      if (!hit) continue;
      const dx = enemy.x + 18 - (p.x + p.w / 2);
      if (p.vy > 120 && oldBottom < enemy.y + 16) { enemy.alive = false; p.vy = -390; arcadeSound('enemy'); }
      else if (p.punch > 0 && Math.sign(dx) === p.facing && Math.abs(dx) < 72) { enemy.alive = false; arcadeSound('enemy'); }
      else damagePlayer(dx > 0 ? -1 : 1);
    }
    const boss = world.boss;
    if (!boss.defeated && p.x > boss.x - 590) {
      boss.active = true;
      boss.anim += dt;
      if (boss.x > world.width - 600 && boss.x < world.width - 300) boss.x += boss.dir * (70 + currentLevel * 4) * dt;
      if (boss.x <= world.width - 600 || boss.x >= world.width - 300) boss.dir *= -1;
      const dx = boss.x + boss.w / 2 - (p.x + p.w / 2);
      const inRange = Math.abs(dx) < 82 && p.y + p.h > boss.y + 8;
      if (inRange && p.punch > 0 && Math.sign(dx) === p.facing && boss.hitCooldown <= 0) {
        boss.hp--; boss.hitCooldown = .52; boss.x += boss.dir * 28;
        arcadeSound('boss');
        if (boss.hp <= 0) { boss.defeated = true; arcadeSound('win'); }
        updateHud();
      } else if (inRange && boss.hitCooldown <= 0) { damagePlayer(dx > 0 ? -1 : 1); boss.hitCooldown = 1.15; }
      boss.hitCooldown = Math.max(0, boss.hitCooldown - dt);
    }
    if (boss.defeated && p.x + p.w >= world.gateX) completeLevel();
    world.camera = Math.max(0, Math.min(world.width - canvas.width, p.x - canvas.width * .34));
    if (Math.floor(world.elapsed * 5) !== Math.floor((world.elapsed - dt) * 5)) updateHud();
  }
  function completeLevel() {
    if (world.complete) return;
    arcadeSound('win');
    world.complete = true; world.paused = true;
    if (!progress.cleared.includes(currentLevel)) progress.cleared.push(currentLevel);
    save(); updateProgress(); updateHud(); showOverlay('won');
  }
  function roundedRect(c, x, y, w, h, r, fill, stroke) {
    c.beginPath(); c.roundRect(x, y, w, h, r);
    if (fill) { c.fillStyle = fill; c.fill(); }
    if (stroke) { c.strokeStyle = stroke; c.stroke(); }
  }
  function drawBackground() {
    const d = world.data;
    if (art.panorama.complete && art.panorama.naturalWidth) {
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(art.panorama, 0, 80, 1536, 864, 0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = .09;
      ctx.fillStyle = d.sky;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
      return;
    }
    const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
    sky.addColorStop(0, '#110d20'); sky.addColorStop(.5, d.sky); sky.addColorStop(1, d.deep);
    ctx.fillStyle = sky; ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 76; i++) {
      const x = ((i * 137.7 - world.camera * (.08 + (i % 4) * .018)) % (canvas.width + 24) + canvas.width + 24) % (canvas.width + 24);
      const y = 22 + ((i * 71) % 265), size = i % 11 === 0 ? 2 : 1;
      ctx.globalAlpha = .35 + .45 * Math.abs(Math.sin(world.elapsed * .8 + i));
      ctx.fillStyle = i % 5 === 0 ? d.color : '#fff4db'; ctx.fillRect(x, y, size, size);
    }
    ctx.globalAlpha = 1;
    const sunX = 680 - world.camera * .14, sunY = 210;
    const halo = ctx.createRadialGradient(sunX, sunY, 25, sunX, sunY, 190);
    halo.addColorStop(0, d.color + '8a'); halo.addColorStop(1, d.color + '00');
    ctx.fillStyle = halo; ctx.fillRect(sunX - 190, sunY - 190, 380, 380);
    ctx.fillStyle = '#ffd58c'; ctx.beginPath(); ctx.arc(sunX, sunY, 74, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = d.color; ctx.beginPath(); ctx.arc(sunX, sunY + 9, 68, Math.PI, 0); ctx.fill();
    for (let layer = 0; layer < 3; layer++) {
      const offset = -((world.camera * (.12 + layer * .1)) % 520);
      ctx.beginPath(); ctx.moveTo(-600, canvas.height);
      for (let x = -600 + offset; x < canvas.width + 620; x += 260) {
        const peak = 185 + layer * 43 + ((Math.floor((x + 600 - offset) / 260) * 31 + layer * 17) % 105);
        ctx.lineTo(x, peak); ctx.lineTo(x + 130, 360 + layer * 45);
      }
      ctx.lineTo(canvas.width + 600, canvas.height); ctx.closePath();
      ctx.fillStyle = layer === 0 ? '#1b1730' : layer === 1 ? '#21182b' : '#2a1929'; ctx.fill();
    }
    ctx.fillStyle = 'rgba(10,8,20,.32)';
    for (let i = 0; i < 10; i++) {
      const x = ((i * 213 - world.camera * .31) % (canvas.width + 180) + canvas.width + 180) % (canvas.width + 180) - 40;
      const h = 50 + (i * 37 % 95); ctx.fillRect(x, 350 - h, 34 + i % 4 * 13, h + 45);
    }
  }
  function drawPlatforms() {
    const d = world.data;
    for (const platform of world.platforms) {
      if (platform.x + platform.w < world.camera - 100 || platform.x > world.camera + canvas.width + 100) continue;
      const x = platform.x, y = platform.y;
      if (platform.ground) {
        ctx.fillStyle = '#21162d'; ctx.fillRect(x, y, platform.w, platform.h);
        ctx.fillStyle = '#b74769'; ctx.fillRect(x, y + 7, platform.w, 3);
        ctx.fillStyle = '#f79748'; ctx.fillRect(x, y, platform.w, 6);
        ctx.fillStyle = '#ffd16c'; ctx.fillRect(x, y, platform.w, 2);
        for (let tx = Math.ceil(x / 34) * 34, col = 0; tx < x + platform.w; tx += 34, col++) {
          ctx.fillStyle = col % 2 ? '#39233a' : '#302039'; ctx.fillRect(tx + 2, y + 13, 30, 20);
          ctx.fillStyle = '#512844'; ctx.fillRect(tx + 2, y + 13, 30, 2);
          ctx.fillStyle = '#20182d'; ctx.fillRect(tx + 15, y + 23, 2, 9);
          if (col % 3 === 1) { ctx.fillStyle = '#e57543'; ctx.fillRect(tx + 26, y + 4, 3, 5); }
        }
      } else {
        ctx.fillStyle = '#25182f'; ctx.fillRect(x, y, platform.w, platform.h);
        ctx.fillStyle = '#bd5473'; ctx.fillRect(x, y + 4, platform.w, platform.h - 4);
        ctx.fillStyle = '#f89949'; ctx.fillRect(x, y, platform.w, 4);
        ctx.fillStyle = '#ffe079'; ctx.fillRect(x, y, platform.w, 2);
        for (let tx = Math.ceil(x / 28) * 28; tx < x + platform.w; tx += 28) {
          ctx.fillStyle = '#49233a'; ctx.fillRect(tx + 2, y + 8, 22, Math.max(4, platform.h - 10));
          ctx.fillStyle = '#78334b'; ctx.fillRect(tx + 2, y + 8, 22, 2);
        }
      }
    }
  }
  function drawGem(gem) {
    if (gem.taken) return;
    const x = gem.x, y = gem.y + Math.sin(world.elapsed * 3 + gem.phase) * 5;
    if (art.sprites.complete && art.sprites.naturalWidth) {
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(art.sprites, 1024, 512, 512, 512, x - 19, y - 20, 38, 40);
    } else {
      ctx.fillStyle = '#ffe08b'; ctx.fillRect(x - 9, y - 11, 18, 22);
      ctx.fillStyle = '#fff5cc'; ctx.fillRect(x - 5, y - 8, 5, 6);
    }
  }
  function drawEnemy(enemy) {
    if (!enemy.alive) return;
    if (art.sprites.complete && art.sprites.naturalWidth) {
      ctx.save(); if (enemy.dir < 0) { ctx.translate(enemy.x * 2 + 36, 0); ctx.scale(-1, 1); }
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(art.sprites, enemy.type * 512, 0, 512, 512, enemy.x - 26, enemy.y - 41, 88, 88);
      ctx.restore();
    } else {
      ctx.fillStyle = '#eae8f5'; ctx.fillRect(enemy.x, enemy.y, 36, 30);
      ctx.fillStyle = '#ef423b'; ctx.fillRect(enemy.x + 8, enemy.y + 10, 20, 5);
    }
  }
  function drawBoss() {
    const b = world.boss; if (b.defeated || b.x < world.camera - 160 || b.x > world.camera + canvas.width + 120) return;
    if (art.sprites.complete && art.sprites.naturalWidth) {
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(art.sprites, 0, 512, 512, 512, b.x - 26, b.y - 25 + Math.sin(b.anim * 3) * 4, 128, 128);
    } else {
      ctx.fillStyle = '#dfb36c'; ctx.fillRect(b.x, b.y, b.w, b.h);
      ctx.fillStyle = '#201525'; ctx.fillRect(b.x + 15, b.y + 21, 12, 18); ctx.fillRect(b.x + 48, b.y + 21, 12, 18);
    }
    const barW = 112, bx = b.x + b.w / 2 - barW / 2, by = b.y - 59;
    roundedRect(ctx,bx,by,barW,10,5,'rgba(15,10,24,.75)','rgba(255,255,255,.3)');
    roundedRect(ctx,bx+2,by+2,(barW-4)*(b.hp/b.maxHp),6,3,world.data.color);
  }
  function drawPlayer() {
    const p = world.player;
    if (p.invulnerable > 0 && Math.floor(world.elapsed * 13) % 2 === 0) return;
    if (art.hero.complete && art.hero.naturalWidth) {
      const running = Math.abs(p.vx) > 30 && p.grounded;
      const frame = p.punch > 0 ? 6 : !p.grounded ? 5 : running ? Math.floor(p.anim / .15) % 4 : world.elapsed < 1.2 ? Math.floor(world.elapsed / .14) % 4 : 4;
      ctx.save();
      if (p.facing < 0) { ctx.translate((p.x + p.w / 2) * 2, 0); ctx.scale(-1, 1); }
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(art.hero, (frame % 4) * 444, Math.floor(frame / 4) * 444, 444, 444, p.x + p.w / 2 - 75, p.y + p.h - 144, 150, 150);
      ctx.restore();
    } else {
      ctx.fillStyle = '#11131d'; ctx.fillRect(p.x + 5, p.y + 14, 24, 31);
      ctx.fillStyle = '#f1b77b'; ctx.fillRect(p.x + 9, p.y, 18, 20);
      ctx.fillStyle = '#16151b'; ctx.fillRect(p.x + 19, p.y + 8, 8, 4);
    }
  }
  function drawGate() {
    const x = world.gateX, y = world.floor - 106;
    ctx.save(); ctx.translate(x, y);
    ctx.shadowColor = world.boss.defeated ? '#ffe18c' : '#d84468'; ctx.shadowBlur = 25;
    ctx.strokeStyle = world.boss.defeated ? '#ffe18c' : '#c4547b'; ctx.lineWidth = 8;
    ctx.beginPath(); ctx.arc(0,51,38,Math.PI,0); ctx.lineTo(38,106); ctx.moveTo(-38,51); ctx.lineTo(-38,106); ctx.stroke();
    ctx.fillStyle = world.boss.defeated ? 'rgba(255,225,140,.28)' : 'rgba(185,53,112,.17)'; ctx.beginPath(); ctx.ellipse(0,77,28,39,0,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='#fff1bd'; ctx.font='bold 17px monospace'; ctx.textAlign='center'; ctx.fillText(world.boss.defeated?'✦':'LOCK',0,84);
    ctx.restore();
  }
  function render() {
    if (!world) return;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBackground();
    ctx.save(); ctx.translate(-world.camera,0);
    drawPlatforms();
    for (const gem of world.collectibles) if (gem.x > world.camera - 40 && gem.x < world.camera + canvas.width + 40) drawGem(gem);
    for (const enemy of world.enemies) drawEnemy(enemy);
    drawGate(); drawBoss(); drawPlayer();
    ctx.restore();
    if (world.boss.active && !world.boss.defeated) {
      ctx.fillStyle='rgba(12,8,19,.56)'; roundedRect(ctx,canvas.width/2-60,17,120,25,12,'rgba(12,8,19,.56)','rgba(255,255,255,.22)');
      ctx.fillStyle='#ffe7b1'; ctx.textAlign='center'; ctx.font='bold 11px monospace'; ctx.fillText(say('boss')+' · '+world.boss.hp+'/'+world.boss.maxHp,canvas.width/2,34);
    }
  }
  function frame(time) {
    if (!world || $('game-screen').hidden) return;
    const dt = Math.min(.034, Math.max(0, (time - previousFrame) / 1000)); previousFrame = time;
    update(dt); render();
    if (!world.paused && !world.complete) animationId = requestAnimationFrame(frame);
  }

  document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();
    if (['arrowleft','arrowright','arrowup',' ','shift'].includes(key)) event.preventDefault();
    if (key === 'arrowleft' || key === 'a') keys.left = true;
    if (key === 'arrowright' || key === 'd') keys.right = true;
    if (key === 'shift') keys.run = true;
    if ((key === ' ' || key === 'arrowup' || key === 'w') && !keys.jump) { keys.jump = true; keys.jumpPressed = true; }
    if ((key === 'x' || key === 'j') && !keys.punch) { keys.punch = true; keys.punchPressed = true; }
    if (key === 'escape') { if (overlayMode === 'pause') resumeGame(); else if (!overlayMode) pauseGame(); }
  });
  document.addEventListener('keyup', event => {
    const key = event.key.toLowerCase();
    if (key === 'arrowleft' || key === 'a') keys.left = false;
    if (key === 'arrowright' || key === 'd') keys.right = false;
    if (key === 'shift') keys.run = false;
    if (key === ' ' || key === 'arrowup' || key === 'w') keys.jump = false;
    if (key === 'x' || key === 'j') keys.punch = false;
  });
  window.addEventListener('blur', () => { keys.left = keys.right = keys.run = keys.jump = keys.punch = false; });
  document.querySelectorAll('[data-control]').forEach(button => {
    const control = button.dataset.control;
    const down = event => { event.preventDefault(); button.setPointerCapture?.(event.pointerId); if (control === 'jump') { if (!keys.jump) keys.jumpPressed = true; keys.jump = true; } else if (control === 'punch') { if (!keys.punch) keys.punchPressed = true; keys.punch = true; } else keys[control] = true; button.classList.add('is-held'); };
    const up = event => { event.preventDefault(); if (control !== 'run') keys[control] = false; else keys.run = false; button.classList.remove('is-held'); };
    button.addEventListener('pointerdown', down); button.addEventListener('pointerup', up); button.addEventListener('pointercancel', up); button.addEventListener('lostpointercapture', up);
  });
  $('start-button').addEventListener('click', () => startLevel(nextLevel()));
  $('wordmark-home').addEventListener('click', event => { event.preventDefault(); showScreen('home'); cancelAnimationFrame(animationId); updateProgress(); });
  $('back-button').addEventListener('click', () => { cancelAnimationFrame(animationId); showScreen('home'); updateProgress(); });
  $('pause-button').addEventListener('click', pauseGame);
  $('overlay-action').addEventListener('click', event => {
    const action = event.currentTarget.dataset.action;
    if (action === 'resume') resumeGame();
    else if (action === 'retry') startLevel(currentLevel);
    else if (action === 'next') startLevel(Math.min(9,currentLevel+1));
    else startLevel(0);
  });
  $('overlay-menu').addEventListener('click', () => { cancelAnimationFrame(animationId); showScreen('home'); updateProgress(); });
  $('language-toggle').addEventListener('change', event => setLanguage(event.target.value));
  $('music-play-button').addEventListener('click', () => toggleMusicPlayer());
  $('music-close-button').addEventListener('click', () => toggleMusicPlayer(false));
  $('music-popover').addEventListener('keydown', event => { if (event.key === 'Escape') toggleMusicPlayer(false); });
  $('install-app').addEventListener('click', async () => { if (!deferredInstallPrompt) return; deferredInstallPrompt.prompt(); await deferredInstallPrompt.userChoice; deferredInstallPrompt = null; $('install-app').hidden = true; });
  window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); deferredInstallPrompt = event; $('install-app').hidden = false; });
  if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('./service-worker.js').catch(() => {});
  if (!ctx) { $('start-button').disabled = true; $('canvas-hint').textContent = say('noCanvas'); }
  setLanguage(language);
  updateProgress();
})();
