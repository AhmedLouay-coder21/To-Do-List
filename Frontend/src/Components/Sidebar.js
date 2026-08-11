const headers = [
    {
        name: 'TASKS',
        children: [
            'Upcoming',
            'Today',
            'Calender'
        ]
    },
    {
        name: 'PRIORITY',
        children: [
            'Low',
            'Medium',
            'High',
            'Very High'
        ]
    }
];

export function RenderSideBar()
{
    const SideBar = document.createElement('div');
    SideBar.id = 'SideBar';

    const SideBarHeader = document.createElement('div');
    SideBarHeader.id = 'SideBarHeader';
    SideBarHeader.textContent = 'Menu';

    const HamBurgerButton = document.createElement('Button');
    HamBurgerButton.textContent = '☰';
    
    
    const SideBarButton = document.createElement('button');
    SideBarButton.id = 'SideBarButton';
    SideBarButton.textContent = '☰';
    SideBarButton.addEventListener("click", (e) => {
        if (SideBar.classList.contains('open')) {
            SideBarClose();
        } else {
            SideBarOpen();
        }
    })
    HamBurgerButton.addEventListener("click", (e) => {
        if (SideBar.classList.contains('open')) {
            SideBarClose();
        } else {
            SideBarOpen();
        }
    })
    SideBarHeader.appendChild(HamBurgerButton);

    SideBar.appendChild(SideBarHeader);

    headers.forEach(element => {
        const section = document.createElement('div');
        section.classList.add('sidebar-section');

        const sectionHeader = document.createElement('div');
        sectionHeader.classList.add('section-header');
        sectionHeader.textContent = element.name;
        section.appendChild(sectionHeader);

        const subSections = document.createElement('div');
        subSections.classList.add('sidebar-subsections');

        element.children.forEach(childName => {
            const childItem = document.createElement('a');
            childItem.classList.add('sidebar-item');
            childItem.textContent = childName;
            subSections.appendChild(childItem);
        });

        section.appendChild(subSections);
        SideBar.appendChild(section);
    });
    document.getElementById('app').appendChild(SideBarButton);
    document.getElementById('app').appendChild(SideBar);
}
export function SideBarOpen()
{
    document.getElementById("SideBarButton").classList.add("open");
    document.getElementById("SideBar").classList.add("open");
    document.getElementById("app").classList.add("open");
}
export function SideBarClose()
{
    document.getElementById("SideBarButton").classList.remove("open");
    document.getElementById("SideBar").classList.remove("open");
    document.getElementById("app").classList.remove("open");
}