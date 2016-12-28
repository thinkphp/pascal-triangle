/*
 * Blaise Pascal's Triangle
 * the formula ->> Elem = Elem(i-j)/(j+1)
 */
#include <stdio.h>

int main() {

    int n,

        i,

        j,

        k,

        sp,

        elem;

    printf("Enter the rows of Pascal's triangle ->>> n=");

    scanf("%d",&n);  

    sp = n;

    for(i = 0; i <= n; ++i) {

        elem = 1;

        for(k = sp; k >= 0; k--) printf(" ");

        sp--;

        for(j = 0; j <= i; ++j) {

            printf("%d ", elem);

            elem = elem * (i - j) / (j + 1); 
             
        }

        printf("\n"); 
    } 
    

 return(0);
}