const rate = document.querySelector('.rating');
        const childs = rate.children;
        let currentShowing = childs[0].children[0]; 
        for(let i = 0;i<childs.length;i++){ 
            childs[i].onclick = ()=>{
                currentShowing.classList.add('hidden');
                const emote =childs[i].querySelector('p');
                emote.classList.remove('hidden');
                currentShowing = emote;
                for(let j = 0;j<=i;j++){
                    childs[j].classList.add("bg-blue-600"); 
                }
                for(let k = i + 1;k<childs.length;k++){
                    childs[k].classList.remove("bg-blue-600"); 
                }
            }
        }