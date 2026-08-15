export function ClearPageContent()
{
    if(document.getElementById('PageContent'))
    {
        document.getElementById('PageContent').textContent = '';
    }
}