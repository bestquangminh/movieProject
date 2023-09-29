import { Button } from "@chakra-ui/react";
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

interface ICustomButton {
    variant: string;
    content: string;
    colorScheme: string;
}

const hover = defineStyle({
    backgroundColor: '#213555',
})

export const buttonTheme = defineStyleConfig({
    variants: { hover },
})

export function CustomButton({ variant, content, colorScheme }: ICustomButton): JSX.Element {
    return (
        <Button fontWeight="bold" mt='10px' mr='20px' w='220px' h='40px' _hover={hover} variant={variant} colorScheme={colorScheme}>
            {content}
        </Button>
    )
}