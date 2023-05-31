const quote_text = document.querySelector(".quote_text");
const persons = document.querySelector(".author");
const btn = document.querySelector(".btn");

const qut_obj = [{
    quote: "Be yourself; everyone else is already taken.",
    person: "Oscar Wilde"
},
{
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    person: "Albert Einstein"
},{
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever",
    person: " Mahatma Gandhi"
},{
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    person: "Thomas A. Edison"
},{
    quote: "For every minute you are angry you lose sixty seconds of happiness.",
    person: "Ralph Waldo Emerson"
},{
    quote: "Everything you can imagine is real.",
    person: "Pablo Picasso"
},{
    quote: "A day without laughter is a day wasted.",
    person: "Nicolas Chamfort"
},{
    quote: "If you don't know where you're going, any road'll take you there",
    person: "George Harrison"
},{
    quote: "This life hard, but it’s harder if you’re stupid.",
    person: "George V. Higgins"
},];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*qut_obj.length);
    quote_text.innerText = qut_obj[random].quote;
    persons.innerText = qut_obj[random].person;

})