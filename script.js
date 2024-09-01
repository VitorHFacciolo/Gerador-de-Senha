const passInput = document.querySelector("#inputPasswordId");
        const lenInput = document.querySelector("#inputLengthId");
        const infoLength = document.querySelector('label[for="inputLengthId"]');
        const btnGerar = document.querySelector("#btnGerar");

        const chkLower = document.querySelector("#chkLowerId");
        const chkUpper = document.querySelector("#chkUpperId");
        const chkNumber = document.querySelector("#chkNumberId");
        const chkSymbols = document.querySelector("#chkSymbolsId");

        const numbers = [0,1,2,3,4,5,6,7,8,9];
        const symbols = ["!","@","#","$","%"];

        const characters = Array.from(Array(26)).map((_, i) => i + 97);
        const lowercaseCharacters = characters.map((item) => String.fromCharCode(item));
        const uppercaseCharacters = lowercaseCharacters.map((item) => item.toUpperCase());

        infoLength.innerHTML = lenInput.value;

        lenInput.addEventListener("change", () =>{
            infoLength.innerHTML = lenInput.value;
        });

        btnGerar.addEventListener("click", () => {
            generatePassword(
                chkNumber.checked,
                chkSymbols.checked,
                chkLower.checked,
                chkUpper.checked,
                lenInput.value
            );
        });

        const generatePassword = (
            hasNumber,
            hasSymbols,
            hasLowercase,
            hasUppercase,
            length
        ) => {
            const newArray = [
                ...(hasNumber ? numbers : []),
                ...(hasSymbols ? symbols : []),
                ...(hasLowercase ? lowercaseCharacters : []),
                ...(hasUppercase ? uppercaseCharacters : []),
            ];

            if (newArray.length === 0) return;

            let password = "";

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * newArray.length);
                password += newArray[randomIndex];
            }

            passInput.value = password;
        }