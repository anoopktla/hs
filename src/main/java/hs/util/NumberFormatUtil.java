package hs.util;

public class NumberFormatUtil {
    private static String[]ones ={"one","two","three","four","five","six","seven","eight","nine"};
    private static String[]tens ={"ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"};
    private static String getTens(int number){
        return tens[number];
    }
    private static String getOnes(int number){
        return ones[number];
    }
    public static String getAsString(int number){
        StringBuffer numberAsString= new StringBuffer("");

        int length = String.valueOf(number).length();
        switch (length){
            case 1:{
                numberAsString = numberAsString.append(getOnes(number));
                break;
            }
            case 2:{
                numberAsString = numberAsString.append(getTens(number%10));
                break;
            }
            case 3:{

            }



        }
        return numberAsString.toString();
    }


}
