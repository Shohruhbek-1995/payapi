
var user = {}

user.firstname = prompt("Ismingiz:", "Shohruxbek")
user.lastname = prompt("Familiyangiz:", "Numanov");
user.age = prompt("Yoshingiz:", 26);
user.film = prompt("Film:", "Yunus Emro");
user.Universitet = prompt("Universitet:", "TUIT");
user.kurs = prompt("Kurs:", "1");
user.yonalish = prompt ("Yo'nalish:", "KIF");
user.hobbi = prompt ("Hobbi: ", "Dasturlash");
user.maosh = prompt ("Maosh","Sir");
user.rahmat = prompt("Javobingiz uchun rahmat", "sizga ham");


alert(`Assalomu alaykum,
Ismingiz :${user.firstname}
Familyangiz: ${user.lastname}
Sizning yoshingiz ${user.age}
Yoqtirgan filmingiz: ${user.film}
Universitet: ${user.Universitet}
Kursingiz: ${user.kurs}
Yo'nalishingiz: ${user.yonalish}
Ho'bbiyingiz ${user.hobbi}
Maoshingiz: ${user.maosh} `);
console.log(user)

