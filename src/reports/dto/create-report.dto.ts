import { IsEmpty, IsISO8601 } from "class-validator";
import { IsAfter } from "src/common/validators/is-after.rule";


export class CreateReportDto {
    @IsISO8601()
    @IsEmpty()
    start_date: Date;

    @IsAfter('start_date')
    @IsISO8601()
    @IsEmpty()
    end_date: Date;

}
