export type TQuery = Record<string, string | string[] | number | number[]>;
export type TData = Partial<IFetchData<any, any, any, any>>;
export interface IFetchPayload<Body, Query, ExtraParams, ExtraHeader> {
    body?: Body;
    params?: Query;
    extraParams?: Partial<ExtraParams>;
    config?: IApiConfigProps<ExtraHeader>;
}
interface IFetchData<Body, Query, ExtraParams, ExtraHeader> extends IFetchPayload<Body, Query, ExtraParams, ExtraHeader> {
    method?: string;
}
export type TApiConfigHeadersProps<ExtraHeader = Record<string, string>> = ExtraHeader & {
    ["Authorization"]?: string;
    ["Content-Type"]?: string;
    ["X-Content-Type-Options"]?: string;
    ["Content-Security-Policy"]?: string;
    ["Strict-Transport-Security"]?: string;
    ["X-Frame-Options"]?: string;
};
export interface IApiConfigProps<ExtraHeader> {
    headers?: TApiConfigHeadersProps<ExtraHeader>;
}
interface IApiHandleProps<ExtraHeader> {
    beforeRequestHandle?: (updateHeader: IApiConfigProps<ExtraHeader>, url: string, data: TData) => void;
    handleErrors?: (error: any) => void;
}
interface IApiExtraConfig {
    mode?: RequestMode;
}
export interface IApiProps<ExtraHeader> {
    baseUrl: string;
    config: IApiConfigProps<ExtraHeader>;
    handlers?: IApiHandleProps<ExtraHeader>;
    extraConfig?: IApiExtraConfig;
}
export interface IApiConfigReturn<ExtraParams, ExtraHeader> extends IApiProps<ExtraHeader> {
    get<Response, Query extends TQuery>(url: string, payload: IFetchPayload<void, Query, ExtraParams, ExtraHeader>): Promise<Response>;
    post<Response, Body, Query extends TQuery>(url: string, payload: IFetchPayload<Body, Query, ExtraParams, ExtraHeader>): Promise<Response>;
    put<Response, Body, Query extends TQuery>(url: string, payload: IFetchPayload<Body, Query, ExtraParams, ExtraHeader>): Promise<Response>;
    patch<Response, Body, Query extends TQuery>(url: string, payload: IFetchPayload<Body, Query, ExtraParams, ExtraHeader>): Promise<Response>;
    delete<Response, Query extends TQuery>(url: string, payload: IFetchPayload<void, Query, ExtraParams, ExtraHeader>): Promise<Response>;
}
export declare class ApiConfig<ExtraParams = Record<string, string>, ExtraHeader = Record<string, string>> implements IApiConfigReturn<ExtraParams, ExtraHeader> {
    baseUrl: string;
    config: IApiConfigProps<ExtraHeader>;
    handlers: IApiHandleProps<ExtraHeader> | undefined;
    extraConfig: IApiExtraConfig;
    constructor({ baseUrl, config, handlers, extraConfig }: IApiProps<ExtraHeader>);
    get: <Response_1, Query extends TQuery = {}>(url: string, payload?: IFetchPayload<void, Query, ExtraParams, ExtraHeader> | undefined) => Promise<Response_1>;
    post: <Response_1, Body_1 = {}, Query extends TQuery = {}>(url: string, payload?: IFetchPayload<Body_1, Query, ExtraParams, ExtraHeader> | undefined) => Promise<Response_1>;
    put: <Response_1, Body_1 = {}, Query extends TQuery = {}>(url: string, payload?: IFetchPayload<Body_1, Query, ExtraParams, ExtraHeader> | undefined) => Promise<Response_1>;
    patch: <Response_1, Body_1 = {}, Query extends TQuery = {}>(url: string, payload?: IFetchPayload<Body_1, Query, ExtraParams, ExtraHeader> | undefined) => Promise<Response_1>;
    delete: <Response_1, Query extends TQuery = {}>(url: string, payload?: IFetchPayload<void, Query, ExtraParams, ExtraHeader> | undefined) => Promise<Response_1>;
    private _fetch;
    private _handleBody;
    /**
     * @param query
     * @in {foo: "bar", hello: "world"}
     * @out ?foo=bar&hello=world
     */
    private _createQueryParams;
}
export {};
