enum Themes {
    'LIGHT',
    'DARK',
};

enum Languages {
    'EN' = 'English',
};

enum Weekday {
    'SUN',
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT'
};

type User = {
    id: number;
    username: string;
    email?: string;
    password: string;
    theme: Themes;
    language: Languages;
    first_weekday: Weekday;
    created_at: Date;
};

enum Colors {
    'GREY',
    'RED',
    'PINK',
    'PURPLE',
    'BLUE',
    'GREEN',
    'YELLOW',
    'ORANGE',
};

type Category = {
    id: number;
    name: string;
    color: Colors;
    visible_for?: User['id'];
    hidden_for?: User['id'][];
    created_at: Date;
};

enum ConditionTypes {
    'NUMBER',
    'BOOLEAN',
    'DATE',
};

type Progress = {
    date?: Date;
};

type Comparison = '>' | '>=' | '<' | '<=' | '<>' | '=' | '!=';

interface NumberCondition {
    type: ConditionTypes.NUMBER;
    value: number | number[];
    progress?: Progress & { value: number };
};

interface DurationCondition {
    type: ConditionTypes.NUMBER;
    value: number | number[];
    progress?: Progress & { value: number };
}

interface BooleanCondition {
    type: ConditionTypes.BOOLEAN;
    value: boolean;
    progress?: Progress & { value: boolean };
};

interface DateCondition {
    type: ConditionTypes.DATE;
    value: Date | Date[];
    exceptions?: (Date | Date[])[];
};

type ConditionType = NumberCondition | DurationCondition | BooleanCondition | DateCondition;

type Condition = {
    id: number;
    name: string;
    condition: Comparison;
    created_at: Date;
} & ConditionType;

type Feature = {
    id: number;
    name: string;
    is_default: boolean;
    conditions: Condition['id'][];
    visible_for: User['id'][];
    created_at: Date;
};

type Item = {
    id: number;
    name: string;
    description: string;
    user_id: User['id'];
    feature_id: Feature['id'];
    category_ids: Category['id'][];
    conditions: Condition[];
    quick_access: boolean;
    created_at: Date;
};
