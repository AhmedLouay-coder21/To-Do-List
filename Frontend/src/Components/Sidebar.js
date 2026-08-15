import '@fortawesome/fontawesome-free/css/all.min.css';
import { RenderUpcoming } from '../views/upcoming'
import { RenderToday } from '../views/today';
import { taskPriorityCount, todayTasksCount, upcomingTasksCount } from '../utils/taskCount';
import { RenderPriority } from '../views/taskPriority';
import { RenderCalenderPage } from '../views/calender';

export const headers = [
    {
        name: 'TASKS',
        children: [
            {
                name: 'Upcoming',
                icon: 'fa-forward'
            },
            {
                name: 'Today',
                icon: 'fa-list-check'
            },
            {
                name: 'Calender',
                icon: 'fa-calendar-days'
            }
        ]
    },
    {
        name: 'PRIORITY',
        children: [
            {
                name: 'Low', 
                color: '#70d1d6'
            },
            {
                name:'Medium',
                color: '#f5d34f'
            },
            {
                name: 'High',
                color: '#e66b6b'
            },
            {
                name: 'Very High',
                color: '#333'
            }
        ]
    }
];

export function RenderSideBar()
{
    const SideBar = document.createElement('div');
    SideBar.id = 'SideBar';

    const SideBarHeader = document.createElement('div');
    SideBarHeader.id = 'SideBarHeader';

    const SideBarHeaderText = document.createElement('div');
    SideBarHeaderText.textContent = 'Menu';
    SideBarHeaderText.id = 'SideBarHeaderText';
    SideBarHeader.appendChild(SideBarHeaderText);

    const HamBurgerButton = document.createElement('Button');
    HamBurgerButton.textContent = '☰';
    HamBurgerButton.classList.add('hamburger-button');
    HamBurgerButton.id = 'SideBarHeaderButton';
    
    
    const SideBarButton = document.createElement('button');
    SideBarButton.id = 'SideBarButton';
    SideBarButton.classList.add('hamburger-button');
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

    const SideBarSections = document.createElement('div');
    SideBarSections.classList.add('sidebar-sections');
    SideBar.appendChild(SideBarSections);

    headers.forEach(element => {
        const section = document.createElement('div');
        section.classList.add('sidebar-section');

        const sectionHeader = document.createElement('div');
        sectionHeader.classList.add('section-header');
        sectionHeader.textContent = element.name;
        section.appendChild(sectionHeader);

        const subSections = document.createElement('div');
        subSections.classList.add('sidebar-subsections');

        element.children.forEach(child => {
            const childItem = document.createElement('div');
            childItem.classList.add('sidebar-item');

            const type = document.createElement('div');
            type.classList.add('task-type');

            const count = document.createElement('div');
            count.classList.add('task-count');

            if(child.name == 'Upcoming')
            {
                childItem.addEventListener('click', RenderUpcoming);
                count.textContent = upcomingTasksCount();
            }
            else if (child.name == 'Today')
            {
                childItem.addEventListener('click', RenderToday);
                count.textContent = todayTasksCount();
            }
            else if (child.name == 'Calender')
            {
                childItem.addEventListener('click', RenderCalenderPage);
            }

            if (child.icon) 
            {
            const icon = document.createElement('i');
            icon.classList.add('fa-solid', child.icon);
            icon.classList.add('sidebar-icon');

            type.appendChild(icon);
            }

            if (child.color) 
            {
                const square = document.createElement('span');
                square.classList.add('priority-square');
                square.style.backgroundColor = child.color;

                childItem.addEventListener('click', () => RenderPriority(child.name));
                count.textContent = taskPriorityCount(child.name);

                type.appendChild(square);
            }

            const text = document.createElement('span');
            text.textContent = child.name;

            type.appendChild(text);

            childItem.appendChild(type);
            childItem.appendChild(count);

            subSections.appendChild(childItem);
        });

        section.appendChild(subSections);
        SideBarSections.appendChild(section);
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