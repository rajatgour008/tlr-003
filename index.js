// creater
const crt = (type)=>document.createElement(type)
// end creater
// clearRoot
const clearRoot = (root)=>{
    const {children} = root
    while(children.length>0){
        children[0].remove()
    }
}
// end clearRoot
// start usercard....
const card = (root,udata,index)=>{
   const createCard = (root,udata,index) =>{
    const {d,name,num} = udata
    const div = crt("div")
    div.id = udata.p==="yes"?"card":"";
    div.className = "card"
    const s1 = crt("span")
    const s2 = crt("span")
    const s3 = crt("span")
    const s4 = crt("span")
    const s5 = crt("span")
    const s6 = crt("span")
    s1.id = "date"
    s2.id = "del"
    s3.id = "name"
    s4.id = "nom"
    s5.id = "b1"
    s6.id = "b2"
    s1.textContent = `${d}`
    s2.innerHTML = "&#10060"
    s3.textContent = `${name}`
    s4.textContent = `${num}`
    s5.textContent = `complete`
    s6.textContent = `pick-up`
    s5.style.border = `1px solid ${udata.s==="yes"?"green":"red"}`
    s6.style.border = `1px solid ${udata.p==="yes"?"green":"red"}`
    div.append(s1)
    div.append(s2)
    div.append(s3)
    div.append(s4)
    div.append(s5)
    div.append(s6)
    root.append(div)
    div.addEventListener("click",(e)=>{
        const {id} = e.target
        switch(id){
            case "name" :
            case "nom" :
            case "date" :
            case "card" :
            case "" :
                clearRoot(root)
                detail(root,udata)
                break;
            case "del" :
                const arr = JSON.parse(localStorage.data)
                arr.splice(index,1)
                localStorage.data = JSON.stringify(arr)
                clearRoot(root)
                head(root)
                display(root)
                break;
            case "b1" :
                s5.style.border = "1px solid green"
                const user = JSON.parse(localStorage.data)
                user[index].s = "yes"
                udata.s = "yes"
                localStorage.data = JSON.stringify(user)
                break;
            case "b2" :
               if(udata.s==="yes"){
                s6.style.border = "1px solid green"
                const client = JSON.parse(localStorage.data)
                client[index].p = "yes"
                localStorage.data = JSON.stringify(client)
                clearRoot(root)
                head(root)
                display(root)
               }
                break;
        }
    })
   }
   const detail = (root,udata)=>{
       const div = crt("div")
       div.className = "detail"
       const back = crt("span")
       back.id = "back"
       back.innerHTML = "&#10060"
       const name = crt("span")
       name.id = "n"
       name.textContent = `${udata.name}`
       const measure = crt("span")
       measure.id = "m"
       measure.textContent = `${udata.c} measurement`
       div.append(back)
       div.append(name)
       div.append(measure)
       for(let i in udata){
        if(i!="num"&&i!="p"&&i!="s"&&i!="d"&&i!="name"&&i!="c"){
            const span = crt("span")
            span.textContent = `${i}`
            const span1 = crt("span")
            span1.textContent = `${udata[i]}`
            div.append(span)
            div.append(span1)
        }
       }
       root.append(div)
       back.addEventListener("click",()=>{
       clearRoot(root)
       head(root)
       display(root)
       })
   }
   createCard(root,udata,index)
}
//end usercard
// header
const head = (root)=>{
    const form = (root)=>{
    const shirt = (root,data)=>{
        data.shirt_type = "apple"

        const div = crt("div")
        div.className = "shirt-form"
        const in1 = crt("input")
        const in2 = crt("input")
        const in3 = crt("input")
        const in4 = crt("input")
        const in5 = crt("input")
        const in6 = crt("input")
        const in7 = crt("input")
        in1.type = "number"
        in2.type = "number"
        in3.type = "number"
        in4.type = "number"
        in5.type = "number"
        in6.type = "number"
        in7.type = "number"
        in1.name = "neck"
        in2.name = "shoulder"
        in3.name = "chest"
        in4.name = "shirt_waist"
        in5.name = "sleeve"
        in6.name = "length"
        in7.name = "wrist"
        in1.placeholder = "neck"
        in2.placeholder = "shoulder"
        in3.placeholder = "chest"
        in4.placeholder = "shirt_waist"
        in5.placeholder = "sleeve"
        in6.placeholder = "length"
        in7.placeholder = "wrist"

        const s1 = crt("span")
        s1.textContent = "type"
        const s2 = crt("span")
        s2.innerHTML = "home"
        s2.id = "home"
        const s3 = crt("span")
        s3.textContent = "submit"
        s3.id="submit"
        
        const sel = crt("select")
        sel.name = "shirt_type"
        
        const op1 = crt("option")
        op1.textContent = "apple"
        op1.value = "apple"
        
        const op2 = crt("option")
        op2.textContent = "short-shirt"
        op2.value = "short-shirt"
       
        const op3 = crt("option")
        op3.textContent = "bust"
        op3.value = "bust"
        
        const op4 = crt("option")
        op4.textContent = "kurta"
        op4.value = "kurta"
        
        const op5 = crt("option")
        op5.textContent = "kamij"
        op5.value = "kamij"

        sel.append(op1)
        sel.append(op2)
        sel.append(op3)
        sel.append(op4)
        sel.append(op5)

        div.append(s1)
        div.append(sel)
        div.append(in1)
        div.append(in2)
        div.append(in3)
        div.append(in4)
        div.append(in5)
        div.append(in6)
        div.append(in7)
        div.append(s2)
        div.append(s3)
        root.append(div)
        div.addEventListener("change",(e)=>{
             const {name,value} = e.target
             data[name] = value
        })
        div.addEventListener("click",(e)=>{
           const {id} = e.target
           switch(id){
            case "home":
                clearRoot(root)
                head(root)
                display(root)
                break;
            case "submit":
                if(in1.value&&in2.value&&in3.value&&in4.value&&in5.value&&in6.value&&in7.value){
                    clearRoot(root)
                    const detail = JSON.parse(localStorage.data)
                    detail.push(data)
                    localStorage.data = JSON.stringify(detail)
                    head(root)
                    display(root)                   
                }
                break;
           }
        })

    }
    const pant = (root,data)=>{
        data.pant_type = "flat"

        const div = crt("div")
        div.className = "pant-form"
        const in1 = crt("input")
        const in2 = crt("input")
        const in3 = crt("input")
        const in4 = crt("input")
        const in5 = crt("input")
        const in6 = crt("input")
        const in7 = crt("input")
        const in8 = crt("input")
        in1.type = "number"
        in2.type = "number"
        in3.type = "number"
        in4.type = "number"
        in5.type = "number"
        in6.type = "number"
        in7.type = "number"
        in8.type = "number"
        in1.name = "pant_waist"
        in2.name = "hips"
        in3.name = "rise"
        in4.name = "thigh"
        in5.name = "inseam"
        in6.name = "outseam"
        in7.name = "bottom"
        in8.name = "backpocket"
        in1.placeholder = "pant-waist"
        in2.placeholder = "hips"
        in3.placeholder = "rise"
        in4.placeholder = "thigh"
        in5.placeholder = "inseam"
        in6.placeholder = "outseam"
        in7.placeholder = "bottom"
        in8.placeholder = "back-pocket"

        const s1 = crt("span")
        s1.textContent = "type"
        const s2 = crt("span")
        s2.innerHTML = "home"
        s2.id="home"
        const s3 = crt("span")
        s3.textContent = "submit"
        s3.id = "submit"
        
        const sel = crt("select")
        sel.name = "pant_type"
        
        const op1 = crt("option")
        op1.textContent = "flat"
        op1.value = "flat"
        
        const op2 = crt("option")
        op2.textContent = "anker"
        op2.value = "anker"
       
        const op3 = crt("option")
        op3.textContent = "pencil"
        op3.value = "pencil"
        
        const op4 = crt("option")
        op4.textContent = "bell-bottom"
        op4.value = "bell-bottom"
        
        const op5 = crt("option")
        op5.textContent = "pejma"
        op5.value = "pejma"

        sel.append(op1)
        sel.append(op2)
        sel.append(op3)
        sel.append(op4)
        sel.append(op5)

        div.append(s1)
        div.append(sel)
        div.append(in1)
        div.append(in2)
        div.append(in3)
        div.append(in4)
        div.append(in5)
        div.append(in6)
        div.append(in7)
        div.append(in8)
        div.append(s2)
        div.append(s3)
        root.append(div)
        div.addEventListener("change",(e)=>{
            const {name,value} =e.target
            data[name] = value
        })
        div.addEventListener("click",(e)=>{
            const {id} = e.target
            switch(id){
                case "home":
                    clearRoot(root)
                    head(root)
                    display(root)
                    break;
                case "submit":
                    if(in1.value&&in2.value&&in3.value&&in4.value&&in5.value&&in6.value&&in7.value&&in8.value){
                        clearRoot(root)
                        const user = JSON.parse(localStorage.data)
                        user.push(data)
                        localStorage.data = JSON.stringify(user)
                        head(root)
                        display(root)
                    }
                    break;
            }
        })
    }
    const sp = (root,data)=>{
        data.shirt_type = "apple"

        const div = crt("div")
        div.className = "shirt-form"
        const in1 = crt("input")
        const in2 = crt("input")
        const in3 = crt("input")
        const in4 = crt("input")
        const in5 = crt("input")
        const in6 = crt("input")
        const in7 = crt("input")
        in1.type = "number"
        in2.type = "number"
        in3.type = "number"
        in4.type = "number"
        in5.type = "number"
        in6.type = "number"
        in7.type = "number"
        in1.name = "neck"
        in2.name = "shoulder"
        in3.name = "chest"
        in4.name = "shirt_waist"
        in5.name = "sleeve"
        in6.name = "length"
        in7.name = "wrist"
        in1.placeholder = "neck"
        in2.placeholder = "shoulder"
        in3.placeholder = "chest"
        in4.placeholder = "shirt_waist"
        in5.placeholder = "sleeve"
        in6.placeholder = "length"
        in7.placeholder = "wrist"

        const s1 = crt("span")
        s1.textContent = "type"
        const s2 = crt("span")
        s2.innerHTML = "home"
        s2.id="home"
        const s3 = crt("span")
        s3.textContent = "submit"
        s3.id = "nextF"
        const s4 = crt("h2")
        s4.textContent = "shirt measurement"
        
        const sel = crt("select")
        sel.name = "shirt_type"
        
        const op1 = crt("option")
        op1.textContent = "apple"
        op1.value = "apple"
        
        const op2 = crt("option")
        op2.textContent = "short-shirt"
        op2.value = "short-shirt"
       
        const op3 = crt("option")
        op3.textContent = "bust"
        op3.value = "bust"
        
        const op4 = crt("option")
        op4.textContent = "kurta"
        op4.value = "kurta"
        
        const op5 = crt("option")
        op5.textContent = "kamij"
        op5.value = "kamij"

        sel.append(op1)
        sel.append(op2)
        sel.append(op3)
        sel.append(op4)
        sel.append(op5)

        div.append(s4)
        div.append(s1)
        div.append(sel)
        div.append(in1)
        div.append(in2)
        div.append(in3)
        div.append(in4)
        div.append(in5)
        div.append(in6)
        div.append(in7)
        div.append(s2)
        div.append(s3)
        root.append(div)
        div.addEventListener("change",(e)=>{
            const {name,value} = e.target
            data[name] = value
        })
        div.addEventListener("click",(e)=>{
          const {id} = e.target
          switch(id){
            case "home":
                clearRoot(root)
                head(root)
                display(root)
                break;
            case "nextF":
               if(in1.value&&in2.value&&in3.value&&in4.value&&in5.value&&in6.value&&in7.value){
                data.pant_type = "flat"
                clearRoot(root)
                const div = crt("div")
                div.className = "pant-form"
                const in1 = crt("input")
                const in2 = crt("input")
                const in3 = crt("input")
                const in4 = crt("input")
                const in5 = crt("input")
                const in6 = crt("input")
                const in7 = crt("input")
                const in8 = crt("input")
                in1.type = "number"
                in2.type = "number"
                in3.type = "number"
                in4.type = "number"
                in5.type = "number"
                in6.type = "number"
                in7.type = "number"
                in8.type = "number"
                in1.name = "pant_waist"
                in2.name = "hips"
                in3.name = "rise"
                in4.name = "thigh"
                in5.name = "inseam"
                in6.name = "outseam"
                in7.name = "bottom"
                in8.name = "backpocket"
                in1.placeholder = "pant-waist"
                in2.placeholder = "hips"
                in3.placeholder = "rise"
                in4.placeholder = "thigh"
                in5.placeholder = "inseam"
                in6.placeholder = "outseam"
                in7.placeholder = "bottom"
                in8.placeholder = "back-pocket"
        
                const s1 = crt("span")
                s1.textContent = "type"
                const s2 = crt("span")
                s2.innerHTML = "home"
                s2.id = "home"
                const s3 = crt("span")
                s3.textContent = "submit"
                s3.id = "submit"
                const s4 = crt("h2")
                s4.textContent = "pant-measurement"
                
                const sel = crt("select")
                sel.name = "pant_type"
                
                const op1 = crt("option")
                op1.textContent = "flat"
                op1.value = "flat"
                
                const op2 = crt("option")
                op2.textContent = "anker"
                op2.value = "anker"
               
                const op3 = crt("option")
                op3.textContent = "pencil"
                op3.value = "pencil"
                
                const op4 = crt("option")
                op4.textContent = "bell-bottom"
                op4.value = "bell-bottom"
                
                const op5 = crt("option")
                op5.textContent = "pejama"
                op5.value = "pejama"
        
                sel.append(op1)
                sel.append(op2)
                sel.append(op3)
                sel.append(op4)
                sel.append(op5)
        
                div.append(s4)
                div.append(s1)
                div.append(sel)
                div.append(in1)
                div.append(in2)
                div.append(in3)
                div.append(in4)
                div.append(in5)
                div.append(in6)
                div.append(in7)
                div.append(in8)
                div.append(s2)
                div.append(s3)
                root.append(div)
                
                div.addEventListener("change",(e)=>{
                    const {name,value} = e.target
                    data[name] = value
                })
                div.addEventListener("click",(e)=>{
                    const{id} = e.target
                    switch(id){
                        case "home":
                            clearRoot(root)
                            head(root)
                            display(root)
                            break;
                        case "submit":
                            if(in1.value&&in2.value&&in3.value&&in4.value&&in5.value&&in6.value&&in7.value&&in8.value){
                                const user = JSON.parse(localStorage.data)
                                user.push(data)
                                localStorage.data = JSON.stringify(user)
                                clearRoot(root)
                                head(root)
                                display(root)
                            }
                            break;
                    }
                })
               }
                break;
            }
        })
    }
    const cot = (root,data)=>{
        const div = crt("div")
        div.className = "shirt-form"
        const in1 = crt("input")
        const in2 = crt("input")
        const in3 = crt("input")
        const in4 = crt("input")
        const in5 = crt("input")
        const in6 = crt("input")
        const in7 = crt("input")
        const in8 = crt("input")
        in1.type = "number"
        in2.type = "number"
        in3.type = "number"
        in4.type = "number"
        in5.type = "number"
        in6.type = "number"
        in7.type = "number"
        in8.type = "number"
        in1.name = "neck"
        in2.name = "shoulder"
        in3.name = "chest"
        in4.name = "shirt_waist"
        in5.name = "sleeve"
        in6.name = "length"
        in7.name = "wrist"
        in8.name = "backcross"
        in1.placeholder = "neck"
        in2.placeholder = "shoulder"
        in3.placeholder = "chest"
        in4.placeholder = "shirt_waist"
        in5.placeholder = "sleeve"
        in6.placeholder = "length"
        in7.placeholder = "wrist"
        in8.placeholder = "back-cross"

        const s2 = crt("span")
        s2.innerHTML = "home"
        s2.id="home"
        const s3 = crt("span")
        s3.textContent = "submit"
        s3.id = "submit"


        div.append(in1)
        div.append(in2)
        div.append(in3)
        div.append(in4)
        div.append(in5)
        div.append(in6)
        div.append(in7)
        div.append(in8)
        div.append(s2)
        div.append(s3)
        root.append(div)
        div.addEventListener("change",(e)=>{
            const {name,value} =e.target
            data[name] = value
        })
        div.addEventListener("click",(e)=>{
            const {id} = e.target
            switch(id){
                case "home":
                    clearRoot(root)
                    head(root)
                    display(root)
                    break;
                case "submit":
                    if(in1.value&&in2.value&&in3.value&&in4.value&&in5.value&&in6.value&&in7.value){
                        const user = JSON.parse(localStorage.data)
                        user.push(data)
                        localStorage.data = JSON.stringify(user)
                        clearRoot(root)
                        head(root)
                        display(root)
                    }
                    break;
            }
        })
    }
     const createForm = (root)=>{
        const data = {
            c:"shirt",
            name:"",
            num:"",
            s:"no",
            p:"no",
            d:new Date().toLocaleDateString()
        }
        const div = crt("div")
        div.className = "form"
        const in1 = crt("input")
        const in2 = crt("input")
        in1.type = "text"
        in1.name = "name"
        in2.type = "number"
        in2.name = "num"
        in1.placeholder = "full name"
        in2.placeholder = "mobile-number"
        const s1 = crt("span")
        s1.textContent = "select choice"
        const r1 = crt("input")
        r1.type = "radio"
        r1.name = "c"
        const r2 = crt("input")
        r2.type = "radio"
        r2.name = "c"
        const r3 = crt("input")
        r3.type = "radio"
        r3.name = "c"
        const r4 = crt("input")
        r4.type = "radio"
        r4.name = "c"
        r1.value = "shirt"
        r2.value = "pant"
        r3.value = "shirt & pant"
        r4.value = "cot"
        const s2 = crt("span")
        s2.textContent = "shirt"
        const s3 = crt("span")
        s3.textContent = "pant"
        const s4 = crt("span")
        s4.textContent = "shirt & pant"
        const s5 = crt("span")
        s5.textContent = "cot"
        const s6 = crt("span")
        s6.textContent = "done"
        s6.id = "button"
        const s7 = crt("span")
        s7.innerHTML = "&#xab"
        s7.id = "prev"
        div.append(in1)
        div.append(in2)
        div.append(s1)
        div.append(r1)
        div.append(s2)
        div.append(r2)
        div.append(s3)
        div.append(r3)
        div.append(s4)
        div.append(r4)
        div.append(s5)
        div.append(s6)
        div.append(s7)
        root.append(div)
        div.addEventListener("change",(e)=>{
            const {name,value} = e.target
            data[name] = value
        })
        div.addEventListener("click",(e)=>{
            const {id} = e.target
            switch(id){
             case "button" :
              if(data.name&&data.num){
                switch(data.c){
                    case "shirt":
                         clearRoot(root)
                         shirt(root,data)
                        break;
                    case "pant":
                        clearRoot(root)
                        pant(root,data)
                        break;
                    case "shirt & pant":
                        clearRoot(root)
                        sp(root,data)
                        break;
                    case "cot":
                        clearRoot(root)
                        cot(root,data)
                        break;
                   }
              }
               break;
             case "prev":
                 clearRoot(root)
                 head(root)
                 display(root)
                 break;
            }

        })
     }
     createForm(root)
    }
    const search = (root)=>{
        const arr = JSON.parse(localStorage.data)
        if(arr.length > 0){
            clearRoot(root)
            const div = crt("div")
            div.id  = "s"
            const input = crt("input")
            input.placeholder = "enter name"
            const b = crt("button")
            b.id = "click"
            const b1 = crt("button")
            b1.id = "home"
            b.textContent = "search"
            b1.textContent = "home"
            div.append(input)
            div.append(b)
            div.append(b1)
            root.append(div)
            div.addEventListener("click",(e)=>{
                const {id} = e.target
                switch(id){
                    case "click" :
                        if(input.value){
                            const check = false
                            arr.forEach((val,index)=>{
                                if(val.name === input.value){
                                    clearRoot(root)
                                    card(root,val,index)
                                    check = true
                                }
                            })
                            if(!check){
                                clearRoot(div)
                                const h = crt("h1")
                                h.textContent = "no-match"
                                const but = crt("button")
                                but.textContent = "home"
                                div.append(h)
                                div.append(but)
                                but.addEventListener("click",()=>{
                                    clearRoot(root)
                                    head(root)
                                    display(root)
                                })
                            }
                        }
                        break;
                    case "home" :
                        clearRoot(root)
                        head(root)
                        display(root)
                        break;
                }
            })

        }
    }
    const header = crt("header")
    const span1 = crt("span")
    span1.id = "form"
    span1.textContent = "add-customer"
    const span2 = crt("span")
    span2.id = "search"
    span2.textContent = "search"
    header.append(span1)
    header.append(span2)
    root.append(header)
    header.addEventListener("click",(e)=>{
        const {id} = e.target
        switch(id){
            case "form":
                clearRoot(root)
                form(root)
                break;
            case "search":
                search(root)
                break;
        }
    })
}
// end header
// display-data
const display = (root)=>{
  const data = JSON.parse(localStorage.data)
  if(data.length===0){
    const h = crt("h1")
    h.textContent = "no-customer"
    root.append(h)
    return;
  }
  data.forEach((val,index)=>{
        card(root,val,index)
  })
}
// end display-data
//createData
const createData = ()=>{
    if(!localStorage.data)
    localStorage.data = JSON.stringify([])
}
// end createData
createData()
head(document.getElementById("root"))
display(document.getElementById("root"))
