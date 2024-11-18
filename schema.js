const schema = 
{
	"@context": "http://schema.org",
	"@type": "WebSite",
	"name": "Jacky Royer - développeur informatique",
	"description": "Jacky Royer, développeur informatique à Montolieu. Découvrez son portfolio présentant ses compétences et projets, téléchargez son CV ou contactez-le.",
	"image": "https://j4ckr0y.github.io/Portfolio/img/Jacky.webp",
	"url": "https://j4ckr0y.github.io/Portfolio",
	"keywords": "Jacky Royer, Développeur informatique, Portfolio, full-stack, Node, Express, React",
    
}
let script = document.createElement('script');
script.type = "application/ld+json";
script.text = JSON.stringify(schema);
document.getElementsByTagName('head')[0].appendChild(script);