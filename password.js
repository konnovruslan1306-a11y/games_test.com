let brx = confirm("Нажми на ок чтобы получить пароль")
let digits = ['1','2','3','4','5','6','7','8','9','0'];
let lower = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
let upper = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
let symbols = ['&','$','@','(',')','?','<','>','-','_'];
let p1 = digits[Math.floor(Math.random() * digits.length)];
let p2 = lower[Math.floor(Math.random() * lower.length)];
let p3 = upper[Math.floor(Math.random() * upper.length)];
let p4 = symbols[Math.floor(Math.random() * symbols.length)];
let p5 = digits[Math.floor(Math.random() * digits.length)];
let p6 = lower[Math.floor(Math.random() * lower.length)];
let p7 = upper[Math.floor(Math.random() * upper.length)];
let p8 = symbols[Math.floor(Math.random() * symbols.length)];
let kot = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8;
alert('Пароль; ' + kot)
