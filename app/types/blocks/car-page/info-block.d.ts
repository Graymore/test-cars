export type { AppIcons } from '~/types/common/icons'

export interface CarInfoBlockOption {
    title: string;
    value: string;
}

export interface CarInfoBlockProps {
    icon: AppIcons;
    title: string;
    options: CarInfoBlockOption[];
}