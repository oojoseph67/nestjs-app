import { IsJSON, IsNotEmpty } from "class-validator";

export class CreateMetaOptionsDto {
    // @ApiProperty()
    // @IsString()
    // @MinLength(4)
    // @IsNotEmpty()
    // key: string;
  
    // @ApiProperty()
    // @IsNotEmpty()
    // value: any;
  
    @IsNotEmpty()
    @IsJSON()
    metaValue: string;
  }
  