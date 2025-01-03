<script>
    // Function to switch between content sections
    function showContent(sectionId) {
        // Hide all content sections
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show the selected section
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.classList.add('active');
        }
    }

    // Add event listeners to the navbar links
    document.getElementById('homeLink').addEventListener('click', function(event) {
        event.preventDefault();
        showContent('homeContent');
    });

    document.getElementById('aboutLink').addEventListener('click', function(event) {
        event.preventDefault();
        showContent('aboutContent');
    });

    document.getElementById('servicesLink').addEventListener('click', function(event) {
        event.preventDefault();
        showContent('servicesContent');
    });

    document.getElementById('contactLink').addEventListener('click', function(event) {
        event.preventDefault();
        showContent('contactContent');
    });

    // Function to copy the text (button functionality)
    function copyText() {
        const textToCopy = "Hackathon Decentralized Agent Networks!";
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert("Text copied to clipboard!");
            })
            .catch(err => {
                console.error("Error copying text: ", err);
            });
    }

    // Initially show the home content
    showContent('homeContent');
</script>
