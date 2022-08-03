import { IsNotEmpty, IsISO8601, IsString, MaxLength, IsIn, IsNumber  } from 'class-validator'
import { TransactionCategory, TransactionCategoryList, TransactionType, TransactionTypeList } from '../entities/transaction.entity';


export class CreateTransactionDto {

    @IsISO8601()
    @IsNotEmpty()
    payment_date: Date;

    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    name: string;

    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    description: string;
    
    @IsIn(TransactionCategoryList)
    @IsNotEmpty()
    category: TransactionCategory;

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsIn(TransactionTypeList)
    @IsNotEmpty()
    type: TransactionType;
}
