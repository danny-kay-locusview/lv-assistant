import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class LvAssistantService {
    constructor() { }
}
LvAssistantService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LvAssistantService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LvAssistantService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LvAssistantService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LvAssistantService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class LvAssistantComponent {
    constructor() { }
    ngOnInit() {
    }
}
LvAssistantComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LvAssistantComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LvAssistantComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.3", type: LvAssistantComponent, selector: "lib-lv-assistant", ngImport: i0, template: `
    <p>
      lv-assistant works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LvAssistantComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-lv-assistant',
                    template: `
    <p>
      lv-assistant works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class LvAssistantModule {
}
LvAssistantModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LvAssistantModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LvAssistantModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LvAssistantModule, declarations: [LvAssistantComponent], exports: [LvAssistantComponent] });
LvAssistantModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LvAssistantModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.3", ngImport: i0, type: LvAssistantModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LvAssistantComponent
                    ],
                    imports: [],
                    exports: [
                        LvAssistantComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of lv-assistant
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LvAssistantComponent, LvAssistantModule, LvAssistantService };
//# sourceMappingURL=lv-assistant.mjs.map
