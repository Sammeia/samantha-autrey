let i = 0;
            const text = "Samantha Autrey";
            const roleText = "Front-End Engineer | UI/UX Designer";
            const speed = 50; /* The speed/duration of the effect in milliseconds */
            const roleSpeed = 25;
            function typeWriter() {
                if (i < text.length && document.getElementById("typewriter")) {
                    document.getElementById("typewriter").innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                } else{
                    typeRole();
                }
            }
            let j = 0;
            function typeRole() {
                if (j < roleText.length && document.getElementById("role-header")
    ) {
                    document.getElementById("role-header").innerHTML += roleText.charAt(j);
                    j++;
                    setTimeout(typeRole, roleSpeed);
                }
            }

            function openSidebar(){
                document.getElementById("sidebar").classList.add("show");
            }

            function closeSidebar(){
                document.getElementById("sidebar").classList.remove("show");
            }

            window.addEventListener("DOMContentLoaded", function() {
                typeWriter();
            });