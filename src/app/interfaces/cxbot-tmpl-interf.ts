export interface User {
    username: String;
    appNames: Array<string>;
}

export interface PaginatedDoc<T> {
    docs: Array<T>;
    limit: Number;
    page: Number;
    pages: Number;
    total: Number;
}

export interface Template {
    appName: string;
    data: object;
    desc: string;
    key: string;
    keyType: string;
    updateBy: string;
    updatedAt: Date;
    tags: Array<string>;
    _id: string;
}

export interface Domain {
    _id: number
    domainName: string;
    password: string;
    desc: string;
    domainTrigger: string;
    consumedUser: string;
    consumedDate: string;
    platform: Array<GroupPlatform>
    headers: Array<Header>
}

export interface GroupPlatform {
    platformId: number;
    groupId: number;
    platformName: string;
    userName: string;
    password: string;
    fbVerifyToken: string;
    fbSecret: string;
    fbPageId1: number;
    fbAccessTokenForPage1: string;
    fbPageId2: number;
    fbAccessTokenForPage2: string;
    fbConversocialId: string;
    fbQueueId: string;
    zendeskCallback: string;
}

export interface Header {
    key: string;
    value: string
}

export interface Platform {
    platformId: number;
    platformName: string;
}

export interface TemplateData {
    channel: string;
    language: string;
    content: string;
    type: string;
}

export interface TmplDataDialogCb {
    tdIndex: number;
    data: TemplateData;
    origin: TemplateData;
}

export interface SampleTmplData {
    _id: string;
    appName: string;
    title: string;
    data: object;
}


export interface TmplReview {
    application: string;
    data?: TemplateData;
}


export interface SampleTmpl {
    _id: string;
    platform: string;
    type: string;
    message: object;
}

export  interface SampleTmpl {
    _id: string;
    platform: string;
    type: string;
    message: object;
}

export interface CxBotAbility {
    application: string;
    action: string;
    subject: string;
    domain?: string;
    isLogin?: boolean,
}

export  interface SessionExport {
    _id: string;
    date: string;
    time: string;
    platform: string;
    flowRate: Array<string>;
    tags: Array<string>;

}

export const CxbotConstants = {
    COMP_TEMPLATE: 'Template',
    COMP_HISTORY: 'History',
    COMP_DASHBOARD: 'Dashboard',
    COMP_DOMAIN: 'Domain',
    COMP_ACCOUNT: 'Account',
    COMP_GROUP: 'Group',
    COMP_ROLE: 'Role',

    ACTION_CREATE: 'create',
    ACTION_READ: 'read',
    ACTION_UPDATE: 'update',
    ACTION_DELETE: 'delete',
    ACTION_EXPORT: 'export',

    APP_TMPL_ENGINE: 'templateEngine',
    APP_REPORT: 'reportEngine',
    // APP_HISTORY: 'historyEngine',
    APP_AUTH_ENGINE: 'authEngine',
    // APP_USER_CONTROL: 'userControlEngine',
    // APP_PLATFORM_CONTROL: 'platformControlEngine'

};
// TODO rename this file and use type instead of interface
export const TemplateTypes = [
        {
            tmplType: 'plain-text',
            content: '',
            feedbackMsg: false
        },
        {
            tmplType: 'quick-replies',
            msg: '',
            content: [
                {
                    content: '',
                    value: ''
                }
            ],
            repeatMsg: false,
        },
        {
            tmplType: 'button-template',
            msgHeader: 'button template description',
            content: [
                {
                    content: '',
                    value: '',
                    type: 'text',
                    openType: 'newWindow'
                },
                {
                    content: '',
                    value: '',
                    type: 'text',
                    openType: 'newWindow'
                },
                {
                    content: '',
                    value: '',
                    type: 'text',
                    openType: 'newWindow'
                }
            ],
            feedbackMsg: false
        },
        {
            tmplType: 'generic-template',
            content: [
                {
                    msgImageUrl: '',
                    msgTitle: '',
                    msgSubtitle: '',
                    buttons: [
                        {
                            content: '',
                            value: '',
                            type: 'text',
                            openType: 'newWindow'
                        },
                        {
                            content: '',
                            value: '',
                            type: 'text',
                            openType: 'newWindow'
                        },
                        {
                            content: '',
                            value: '',
                            type: 'text',
                            openType: 'newWindow'
                        },
                    ]
                },
            ],
            repeatMsg: false,
        },
        {
            tmplType: 'custom-template',
            content: ''
        },
        {
            tmplType: 'feedback-template',
            maxScore: 5,
            defaultFlows: ['End of conversation', 'Others'],
            content: {
                msg: '',
                defaultFlow: 'Others',
                customFlow: '',
                buttons: [
                    {
                        content: '5 &#9733;',
                        value: '5 &#9733;',
                        type: 'text,'
                    },
                    {
                        content: '4 &#9733;',
                        value: '4 &#9733;',
                        type: 'text,'
                    },
                    {
                        content: '3 &#9733;',
                        value: '3 &#9733;',
                        type: 'text,'
                    },
                    {
                        content: '2 &#9733;',
                        value: '2 &#9733;',
                        type: 'text,'
                    },
                    {
                        content: '1 &#9733;',
                        value: '1 &#9733;',
                        type: 'text,'
                    }
                ],
            }
        }
    ];

export const TemplateInfos = [
        {
            tmplType: 'plain-text',
            header: "Text bubble",
            description: 'Text bubble',
            image: "../../../assets/logo/text-bubble-icon.svg",
            imageDescription: "To promote for specific next steps and be brief"
        },
        {
            tmplType: 'quick-replies',
            header: "Quick replies",
            description: 'Quick replies',
            image: "../../../assets/logo/quick-replies-icon.svg",
            imageDescription: "To promote for specific next steps and be brief"
        },
        {
            tmplType: 'button-template',
            header: "Button template",
            description: 'Button template',
            image: "../../../assets/logo/button_template_icon.svg",
            imageDescription: "To promote for specific next steps and be brief"
        },
        {
            tmplType: 'generic-template',
            header: "Generic template",
            description: 'Generic template',
            image: "../../../assets/logo/generic_icon.svg",
            imageDescription: "To promote for specific next steps and be brief"
        },
        {
            tmplType: 'custom-template',
            header: "Custom template",
            image: "../../../assets/logo/custom-icon.svg",
            imageDescription: "To promote for specific next steps and be brief"
        },
        {
            tmplType: 'feedback-template',
            header: "Feedback template",
            description: 'The feedback is mainly for gathering rating from user. The question should be simple and clear.',
            image: "../../../assets/logo/feedback-icon.svg",
            imageDescription: "To promote for specific next steps and be brief"
        }];

export const domainConfigKey = {
    archival_periodDays: 'data.archival.job.period.days',
    deletion_periodDays: 'data.deletion.job.period.days',
    deletion_expireDays: 'data.deletion.job.expire.days',
    awsAccessKey: 'aws.s3.access.key',
    awsSecretKey: 'aws.s3.secret.key',
    awsRegion: 'aws.s3.region',
    awsBucket: 'aws.s3.bucket'
};
