export function ClearPageContent()
{
    if (document.getElementById('PageContent'))
    {
        document.getElementById('PageContent').textContent = '';
    }

    const oldPageHeader = document.querySelector('header .page-header');
    if (oldPageHeader)
    {
        oldPageHeader.remove();
    }
}