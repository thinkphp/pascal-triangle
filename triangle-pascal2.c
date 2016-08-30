/*
 * Blaise Pascal's Triangle 
 */
#include <stdio.h>
#define MAXN 20

int main() {

    int n,

        i,

        j,

        k, 

        sp;

    unsigned long long pascal[ MAXN ][MAXN ];


    printf("Enter the rows of Pascal's triangle ->>> n=");

    scanf("%d",&n);  

    pascal[0][0] = 1;
 
    for(i = 1; i <= n; ++i) {

        for(j = 0; j <= i; ++j) {

            if( 0 == j || i == j) pascal[i][j] = 1;

                else

                pascal[i][j] = pascal[i-1][j] + pascal[i-1][j-1];
        }
    }

    sp = n;

    for(i = 0; i <= n; ++i) {

        for(k = sp; k>=0; k--) printf(" ");

        sp--;

        for(j = 0; j <= i; ++j) {

            printf("%d ", pascal[i][j]);
        }

        printf("\n");
    }

 return(0);
}