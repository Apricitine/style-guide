const welcomeHead_ = document.querySelector("h1");
if (localStorage.preVisit) welcomeHead_.append(" back");
else if (localStorage.preVisit == undefined || null) localStorage.preVisit = true;
document.cookie = `why you lookin at dis cookie`;