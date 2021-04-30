function changeOuterLinks() {

    const links = document.querySelectorAll('nav#link-list a');
    
    for (let i = 0; i < links.length; i++) { 
        if (links[i].innerText.includes('outer-link') === true) {
            links[i].setAttribute('target', '_blank');
            links[i].innerHTML = `<strong>` +  links[i].innerHTML + `</strong>`;
        } 
    }

    const nav = document.querySelector('nav');

    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.margin = '0px auto';
    nav.style.width = '30%';
    nav.style.border = '1px solid blue';
    nav.style.padding = '16px';
}

changeOuterLinks();

export { changeOuterLinks };