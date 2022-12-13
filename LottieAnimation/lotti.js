// Get Animation Container
let animtionMonster = document.getElementById("animationMonster");
let animationToggle = document.getElementById("animationToggle");
let toggle_c = 0;

// Get monster from lotti
let monster =
    bodymovin.loadAnimation({
          container: animationMonster,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: "https://lottie.host/0a9a8841-59a1-448d-8232-201bdafe927a/z1WjpomYu2.json"
        });


        // Monster emotes with Event Listeners
        // Play excited frames

    animtionMonster.addEventListener('click', function(){
        monster.playSegments([105, 215], true)
    });
    animationMonster.addEventListener('mouseenter', function(){
        monster.playSegments([6, 65], true)
    });
    animationMonster.addEventListener('mouseleave', function(){
        monster.playSegments([241, 288], true)
    });

    let toggle =
    bodymovin.loadAnimation({
          container: animationToggle,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: "https://lottie.host/4d2d2d2d-a7aa-4a27-8e20-317220072926/r2QSRRIpDB.json"
        });

        
       
        






        // Toggle to one side
        animationToggle.addEventListener('click', function(){
            if (toggle_c == 0){
                toggle.playSegments([1,20], true);
                toggle_c = toggle_c + 1;
            }
                else{
                    toggle.playSegments([21,60], true);
                    let toggle_c = 0;
                }
            

        });
        


