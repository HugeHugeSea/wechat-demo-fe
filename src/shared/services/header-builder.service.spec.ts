import {HeaderBuilder} from './header-builder.service';

describe('HeaderBuilderService', () => {
    it('should be created', () => {
        const httpHeaders = HeaderBuilder.create().json().httpBasicAuth('test', 'test').addTraceID().build();
        expect(httpHeaders.keys()).toContain('Content-Type');
        expect(httpHeaders.keys()).toContain('Authorization');
    });
});
