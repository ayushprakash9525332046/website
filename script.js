const messageBar = document.querySelector(".bar-wrapper input");
const sendBtn = document.querySelector(".bar-wrapper button");
const messageBox = document.querySelector(".message-box")

   let API_URL =  "https://api.openai.com/v1/chat/completions"

sendBtn.onclick = function () {
    if (messageBar.value.length > 0){
        console.log("send massage");
        let message =
        `<div class="chat message">
                <img src="img/user.jgp">
                <span>
                ${messageBar.value}
                </span>
            </div>`

            let response =
            ` <div class="chat message">
                <img src="img/user.jgp">
                <span>...
                </span>
            </div>`

          messageBox.insertAdjacentHTML("beforeend",message);
          
          setTimeout(() =>{
                messageBox.insertAdjacentHTML("beforeend",response);
                const requestOptions = {
                    method: POST,
                    headers: {
                        "content-Type":"application/json",
                        "Authorization":
                    }
                }
          },100);
    }
}