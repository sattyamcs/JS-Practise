console.log("Testing")


// 1.Highlight all the words over 8 characters long in the paragraph text (with yellow background)


const para = document.querySelector('p')
para.innerHTML  = para.innerText
.split(' ')
.map(word=>word.length > 8 ? `<span style="color:yellow">${word}</span>`:word)
.join(' ')


// 2.Add a link back to source of the text after the paragraph tag.

let link = document.createElement('a')
link.href = 'https://github.com/sattyamcs'
link.innerText = "Sattyam Chauhan Github page"
document.body.appendChild(link);

// 3.Split each sentence on to a seperate line in the paragraph tag. The text should be string of text and separated with the (.)

// para.innerHTML = para.innerHTML
// .split(' ')
// .join(`</p><p>`)


// 4.Count the number of words in a paragraph tag and display the count after the heading . 
// Assume that all words are separated by white space 

const wordCount = para.innerText. split(' ').length;
console.log(wordCount)
const wordCountEleme = document.createElement('span')
wordCountEleme.innerHTML=`${wordCount} words`
document.body.insertBefore(wordCountEleme,para) //insert before the paragraph


// 5.Replace all question marks with emoji
// using global regular selection for selecting all elements 
Array.from(document.querySelectorAll('p')).forEach(p=>{p.innerHTML=p.innerHTML.replace(/\?/g,'😊')});