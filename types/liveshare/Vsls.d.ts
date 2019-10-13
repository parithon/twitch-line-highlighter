import { Disposable } from "vscode";
import { LiveShare, SharedService, SharedServiceProxy } from "vsls";
import { HighlighterAPI } from "../api";
export declare class Vsls implements Disposable {
    static ServiceId: string;
    static highlightNotification: 'highlight';
    static unhighlightNotification: 'unhighlight';
    static unhighlightAllNotification: 'unhighlightAll';
    /**
     * Create a new VSLS shared service used to notify VSLS guests about
     * changes in our highlights
     * @param vsls The live share API
     * @param api The Highlighter API
     */
    static share(vsls: LiveShare, api: HighlighterAPI): Promise<Vsls>;
    /**
     * Retrieve a VSLS shared service generated by the host to keep
     * track of our highlights
     * @param vsls The live share API
     * @param api The Highlighter API
     */
    static connect(vsls: LiveShare, api: HighlighterAPI): Promise<Vsls>;
    private readonly _disposable;
    private readonly _vsls;
    private readonly _service;
    private readonly _api;
    constructor(vsls: LiveShare, service: SharedService | SharedServiceProxy, api: HighlighterAPI);
    dispose(): void;
    private onHighlightRequestHandler;
    private onUnhighlightRequestHandler;
    private onUnhighlightAllRequestHandler;
    private isRequestFromMe;
    private onHighlightRequestedHandler;
    private onUnhighlightRequestedHandler;
    private onUnhighlightAllRequested;
}
