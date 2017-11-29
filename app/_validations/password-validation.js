"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PasswordValidation = (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value;
        var confirmPassword = AC.get('confirmPassword').value;
        if (password != confirmPassword) {
            ;
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordValidation;
}());
exports.PasswordValidation = PasswordValidation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtdmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhc3N3b3JkLXZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUFBO0lBV0EsQ0FBQztJQVRVLGdDQUFhLEdBQXBCLFVBQXFCLEVBQW1CO1FBQ3JDLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3hDLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDckQsRUFBRSxDQUFBLENBQUMsUUFBUSxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFBQSxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxTQUFTLENBQUUsRUFBQyxhQUFhLEVBQUUsSUFBSSxFQUFDLENBQUUsQ0FBQTtRQUNoRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFBO1FBQ2YsQ0FBQztJQUNMLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBYnN0cmFjdENvbnRyb2x9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRWYWxpZGF0aW9uIHtcblxuICAgIHN0YXRpYyBNYXRjaFBhc3N3b3JkKEFDOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICAgICBsZXQgcGFzc3dvcmQgPSBBQy5nZXQoJ3Bhc3N3b3JkJykudmFsdWU7XG4gICAgICAgbGV0IGNvbmZpcm1QYXNzd29yZCA9IEFDLmdldCgnY29uZmlybVBhc3N3b3JkJykudmFsdWU7XG4gICAgICAgIGlmKHBhc3N3b3JkICE9IGNvbmZpcm1QYXNzd29yZCkgeztcbiAgICAgICAgICAgIEFDLmdldCgnY29uZmlybVBhc3N3b3JkJykuc2V0RXJyb3JzKCB7TWF0Y2hQYXNzd29yZDogdHJ1ZX0gKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==