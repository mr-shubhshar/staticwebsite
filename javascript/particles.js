particlesJS("particlesid", {
    "particles" {
        "number" {
            "value": 100
        },
        "shape" {
            "type": "circle"
        },
        "size" {
            "value": 5,
            "random": true
        },
        "move" {
            "speed": 2,
            "straight": false
        }
    },
    "interactivity" {
        "detect_on": "canvas", // default
        "modes" {
            "push": {
                "particles_nb": 5 // no. of particles born on click
            }
        }
    }
});
