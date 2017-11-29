"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CurrencyFormat = (function () {
    function CurrencyFormat() {
    }
    CurrencyFormat.prototype.transform = function (value, currency) {
        var paddingCount;
        if (currency == 'USD') {
            paddingCount = 2;
        }
        else {
            paddingCount = 8;
        }
        var padding = Array(paddingCount).fill('0').join('');
        var dec = value.toString().split('.')[0];
        var float = value.toString().split('.')[1];
        float = float === undefined ? padding : float + padding.substring(0, padding.length - float.length);
        float = float.substring(0, paddingCount);
        float = float.replace(/(\d)(?=(\d{4})+$)/g, '$1');
        dec = dec.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
        return dec + '.' + float;
    };
    CurrencyFormat = __decorate([
        core_1.Pipe({
            name: 'currencyFormat'
        })
    ], CurrencyFormat);
    return CurrencyFormat;
}());
exports.CurrencyFormat = CurrencyFormat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1cnJlbmN5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUM7QUFLbkM7SUFBQTtJQWlCQSxDQUFDO0lBaEJHLGtDQUFTLEdBQVQsVUFBVSxLQUFhLEVBQUUsUUFBZ0I7UUFDckMsSUFBSSxZQUFvQixDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLFlBQVksR0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osWUFBWSxHQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDO1FBQ0QsSUFBSSxPQUFPLEdBQVcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLEtBQUssR0FBRyxLQUFLLEtBQUssU0FBUyxHQUFHLE9BQU8sR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEcsS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xELEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBaEJRLGNBQWM7UUFIMUIsV0FBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLGdCQUFnQjtTQUN6QixDQUFDO09BQ1csY0FBYyxDQWlCMUI7SUFBRCxxQkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdjdXJyZW5jeUZvcm1hdCdcbn0pXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lGb3JtYXQge1xuICAgIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeTogc3RyaW5nICk6IHN0cmluZyB7XG4gICAgICAgIGxldCBwYWRkaW5nQ291bnQ6IG51bWJlcjtcbiAgICAgICAgaWYgKGN1cnJlbmN5PT0nVVNEJykge1xuICAgICAgICAgICAgcGFkZGluZ0NvdW50PTI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYWRkaW5nQ291bnQ9ODtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFkZGluZzogc3RyaW5nID0gQXJyYXkocGFkZGluZ0NvdW50KS5maWxsKCcwJykuam9pbignJyk7XG4gICAgICAgIGxldCBkZWMgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCcuJylbMF07XG4gICAgICAgIGxldCBmbG9hdCA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgZmxvYXQgPSBmbG9hdCA9PT0gdW5kZWZpbmVkID8gcGFkZGluZyA6IGZsb2F0ICsgcGFkZGluZy5zdWJzdHJpbmcoMCwgcGFkZGluZy5sZW5ndGggLSBmbG9hdC5sZW5ndGgpO1xuICAgICAgICBmbG9hdCA9IGZsb2F0LnN1YnN0cmluZygwLCBwYWRkaW5nQ291bnQpO1xuICAgICAgICBmbG9hdCA9IGZsb2F0LnJlcGxhY2UoLyhcXGQpKD89KFxcZHs0fSkrJCkvZywgJyQxJyk7XG4gICAgICAgIGRlYyA9IGRlYy5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyQpL2csICckMSAnKTtcbiAgICAgICAgcmV0dXJuIGRlYyArICcuJyArIGZsb2F0O1xuICAgIH1cbn1cbiJdfQ==