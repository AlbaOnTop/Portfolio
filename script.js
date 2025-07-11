async function loadPage(page) { //making a SPA (single page application, rerouting to another file, so i dont have to write everything in js w/out the intellisense =) )
    const path = `pages/${page}.html`;
    try { //if he cant fetch a file it wil send an error, really cute prob gonna delete it cuz it wont fail, i hope
    const response = await fetch(path); //the function is async cuz i use await, the await is needed to let the user use the page and not block anything.
    if (!response.ok) throw new Error('Pagina non trovata'); //.ok means that the await fetch fetched smthing and not nothing
    const html = await response.text(); 
    document.getElementById('content').innerHTML = html;//this throws the content of thje file in this string;
    } catch (err) {
    document.getElementById('content').innerHTML = "<h1>404 - Pagina non trovata</h1>";//fallback as said before
    }
}

function handleRouting() {//take whats after the # and check if theres a page with dat name.
    const page = location.hash.replace('#', '') || 'home'; //home is the default as after the # is empty
    loadPage(page);
}

window.addEventListener('hashchange', handleRouting);//when the url change do the function
window.addEventListener('load', handleRouting);//same with the load of a page. to graint the ability to search directly