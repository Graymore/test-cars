import type { AppIcons } from '~/types/common/icons'

export interface InputProps {
    placeholder?: string;
    icon?: AppIcons;
    loading?: boolean;
}

export interface InputState {
    focused: boolean;
}