const sections = document.querySelectorAll('[data-js]');


const observerElems = new IntersectionObserver(
    function(entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('appearance');
                observerElems.unobserve(entry.target)
            }
        })
    },
    {
        threshold: 0.5
    }
)

sections.forEach(function(item) {
    observerElems.observe(item);
})