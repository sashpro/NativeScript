"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PhoneFormat = (function () {
    function PhoneFormat() {
    }
    PhoneFormat.prototype.transform = function (value) {
        if (value === undefined) {
            return null;
        }
        value = value.replace(/[\(\) ]/g, '');
        if (value.length === 9) {
            return value.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '($1) $2 $3 $4');
        }
        else {
            return value.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '($1) $2 $3 $4');
        }
    };
    PhoneFormat = __decorate([
        core_1.Pipe({
            name: 'phoneFormat'
        })
    ], PhoneFormat);
    return PhoneFormat;
}());
exports.PhoneFormat = PhoneFormat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtbnVtYmVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwaG9uZS1udW1iZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRDtBQUtwRDtJQUFBO0lBWUEsQ0FBQztJQVhHLCtCQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ25CLEVBQUUsQ0FBQyxDQUFFLEtBQUssS0FBSyxTQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxFQUFFLENBQUMsQ0FBRSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsOEJBQThCLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDMUUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsOEJBQThCLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDMUUsQ0FBQztJQUNMLENBQUM7SUFYUSxXQUFXO1FBSHZCLFdBQUksQ0FBQztZQUNGLElBQUksRUFBRSxhQUFhO1NBQ3RCLENBQUM7T0FDVyxXQUFXLENBWXZCO0lBQUQsa0JBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdwaG9uZUZvcm1hdCdcbn0pXG5leHBvcnQgY2xhc3MgUGhvbmVGb3JtYXQgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICggdmFsdWUgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1xcKFxcKSBdL2csJycpO1xuICAgICAgICBpZiAoIHZhbHVlLmxlbmd0aCA9PT0gOSApIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8oXFxkezJ9KShcXGR7M30pKFxcZHsyfSkoXFxkezJ9KS8sICcoJDEpICQyICQzICQ0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvKFxcZHszfSkoXFxkezN9KShcXGR7Mn0pKFxcZHsyfSkvLCAnKCQxKSAkMiAkMyAkNCcpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==