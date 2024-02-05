let rollfashion = document.querySelectorAll(".fashion-card");
        let nextfashion = document.querySelector("#nextfashion");
        let backfashion = document.querySelector("#backfashion");

        let countfashion = 0;
        //console.log(rollfashion)

        rollfashion.forEach(
            (rollingfashion,index)=>{
                rollingfashion.style.left = `${index*16.67}%`
            }
        )

         let goforfashion = () => {
            countfashion++;
            if(countfashion == 1){
                nextfashion.style.display = "none";
                backfashion.style.display = "block";
            }
            rollImgfashion();
        }

        let gobacfashion = () => {
            countfashion--;
            if(countfashion == 0){
                backfashion.style.display = "none";
                nextfashion.style.display = "block";
            }
            rollImgfashion();
        }

        let rollImgfashion = ()=>{
            rollfashion.forEach(
                (rollingfashion) => {
                    rollingfashion.style.transform = `translateX(-${countfashion*120}%)`
                }
            )
        }