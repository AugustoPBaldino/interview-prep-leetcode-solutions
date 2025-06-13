//Using Recursion

function mergeTwoListsOptimizated2(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // Caso base: uma das listas está vazia
  if (!list1) return list2;
  if (!list2) return list1;

  // Comparar os valores e continuar recursivamente
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}